import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header — light ivory bar */}
      <header
        className="flex items-center justify-between px-3 py-2"
        style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #D4C9B0',
          boxShadow: '0 2px 10px rgba(90, 70, 40, 0.08)',
        }}
      >
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded-lg transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-body)',
            color: '#6B6055',
            background: '#FAF7F0',
            border: '1px solid #D4C9B0',
          }}
        >
          ← Back
        </button>
        <h1
          className="text-xl tracking-wide"
          style={{ fontFamily: 'var(--font-display)', color: '#2A2016' }}
        >
          Bingo Mixer
        </h1>
        <div className="w-16" />
      </header>

      {/* Instructions */}
      <p
        className="text-center text-sm py-2 px-4 italic"
        style={{ fontFamily: 'var(--font-body)', color: '#6B6055' }}
      >
        Tap a square when you find someone who matches.
      </p>

      {/* Bingo banner */}
      {hasBingo && (
        <div
          className="text-center py-2 text-sm font-semibold tracking-widest"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(90deg, #EAF4EC 0%, #C8E6CC 50%, #EAF4EC 100%)',
            color: '#1E3D28',
            borderTop: '1px solid #5C8A6A',
            borderBottom: '1px solid #5C8A6A',
            fontSize: '0.8rem',
          }}
        >
          ☕ BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
