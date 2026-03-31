import { useState, useCallback, useMemo, useEffect } from 'react';
import type { BingoSquareData, BingoLine, GameState, ThemeId } from '../types';
import { themes } from '../data/questions';
import {
  generateBoard,
  toggleSquare,
  checkBingo,
  getWinningSquareIds,
} from '../utils/bingoLogic';

export interface BingoGameState {
  gameState: GameState;
  board: BingoSquareData[];
  winningLine: BingoLine | null;
  winningSquareIds: Set<number>;
  showBingoModal: boolean;
  selectedTheme: ThemeId;
}

export interface BingoGameActions {
  startGame: () => void;
  handleSquareClick: (squareId: number) => void;
  resetGame: () => void;
  dismissModal: () => void;
  selectTheme: (themeId: ThemeId) => void;
}

const STORAGE_KEY = 'bingo-game-state';
const STORAGE_VERSION = 1;

interface StoredGameData {
  version: number;
  gameState: GameState;
  board: BingoSquareData[];
  winningLine: BingoLine | null;
  selectedTheme: ThemeId;
}

function validateStoredData(data: unknown): data is StoredGameData {
  if (!data || typeof data !== 'object') {
    return false;
  }
  
  const obj = data as Record<string, unknown>;
  
  if (obj.version !== STORAGE_VERSION) {
    return false;
  }
  
  if (typeof obj.gameState !== 'string' || !['start', 'playing', 'bingo'].includes(obj.gameState)) {
    return false;
  }
  
  if (!Array.isArray(obj.board) || (obj.board.length !== 0 && obj.board.length !== 25)) {
    return false;
  }
  
  const validSquares = obj.board.every((sq: unknown) => {
    if (!sq || typeof sq !== 'object') return false;
    const square = sq as Record<string, unknown>;
    return (
      typeof square.id === 'number' &&
      typeof square.text === 'string' &&
      typeof square.isMarked === 'boolean' &&
      typeof square.isFreeSpace === 'boolean'
    );
  });
  
  if (!validSquares) {
    return false;
  }
  
  if (
    obj.winningLine !== null &&
    typeof obj.winningLine !== 'object'
  ) {
    return false;
  }
  if (obj.winningLine !== null) {
    const line = obj.winningLine as Record<string, unknown>;
    if (
      typeof line.type !== 'string' ||
      !['row', 'column', 'diagonal'].includes(line.type) ||
      typeof line.index !== 'number' ||
      !Array.isArray(line.squares)
    ) {
      return false;
    }
  }

  const validThemes: ThemeId[] = ['icebreaker', 'office'];
  if (
    obj.selectedTheme !== undefined &&
    !validThemes.includes(obj.selectedTheme as ThemeId)
  ) {
    return false;
  }

  return true;
}

function loadGameState(): Pick<BingoGameState, 'gameState' | 'board' | 'winningLine' | 'selectedTheme'> | null {
  // SSR guard
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return null;
    }

    const parsed = JSON.parse(saved);
    
    if (validateStoredData(parsed)) {
      return {
        gameState: parsed.gameState,
        board: parsed.board,
        winningLine: parsed.winningLine,
        selectedTheme: (parsed as { selectedTheme?: ThemeId }).selectedTheme ?? 'icebreaker',
      };
    } else {
      console.warn('Invalid game state data in localStorage, clearing...');
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.warn('Failed to load game state:', error);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return null;
}

function saveGameState(gameState: GameState, board: BingoSquareData[], winningLine: BingoLine | null, selectedTheme: ThemeId): void {
  // SSR guard
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const data: StoredGameData = {
      version: STORAGE_VERSION,
      gameState,
      board,
      winningLine,
      selectedTheme,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save game state:', error);
  }
}

export function useBingoGame(): BingoGameState & BingoGameActions {
  const loadedState = useMemo(() => loadGameState(), []);

  const [gameState, setGameState] = useState<GameState>(
    () => loadedState?.gameState || 'start'
  );
  const [board, setBoard] = useState<BingoSquareData[]>(
    () => loadedState?.board || []
  );
  const [winningLine, setWinningLine] = useState<BingoLine | null>(
    () => loadedState?.winningLine || null
  );
  const [showBingoModal, setShowBingoModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>(
    () => loadedState?.selectedTheme ?? 'icebreaker'
  );

  const winningSquareIds = useMemo(
    () => getWinningSquareIds(winningLine),
    [winningLine]
  );

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    saveGameState(gameState, board, winningLine, selectedTheme);
  }, [gameState, board, winningLine, selectedTheme]);

  const selectTheme = useCallback((themeId: ThemeId) => {
    setSelectedTheme(themeId);
  }, []);

  const startGame = useCallback(() => {
    setBoard(generateBoard(themes[selectedTheme].questions));
    setWinningLine(null);
    setGameState('playing');
  }, [selectedTheme]);

  const handleSquareClick = useCallback((squareId: number) => {
    setBoard((currentBoard) => {
      const newBoard = toggleSquare(currentBoard, squareId);
      
      // Check for bingo after toggling
      const bingo = checkBingo(newBoard);
      if (bingo && !winningLine) {
        // Schedule state updates to avoid synchronous setState in effect
        queueMicrotask(() => {
          setWinningLine(bingo);
          setGameState('bingo');
          setShowBingoModal(true);
        });
      }
      
      return newBoard;
    });
  }, [winningLine]);

  const resetGame = useCallback(() => {
    setGameState('start');
    setBoard([]);
    setWinningLine(null);
    setShowBingoModal(false);
  }, []);

  const dismissModal = useCallback(() => {
    setShowBingoModal(false);
  }, []);

  return {
    gameState,
    board,
    winningLine,
    winningSquareIds,
    showBingoModal,
    selectedTheme,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
    selectTheme,
  };
}
