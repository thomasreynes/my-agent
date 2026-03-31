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
      {/* Header — chalkboard menu bar */}
      <header
        className="flex items-center justify-between px-3 py-2"
        style={{
          background: 'oklch(0.18 0.05 45 / 0.95)',
          borderBottom: '1px solid oklch(0.55 0.10 55 / 0.5)',
          boxShadow: '0 2px 10px oklch(0.08 0.04 40 / 0.7)',
        }}
      >
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded-lg transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-body)',
            color: '#D8CCB4',
            background: 'oklch(0.28 0.06 45 / 0.7)',
            border: '1px solid oklch(0.45 0.08 50 / 0.5)',
          }}
        >
          ← Back
        </button>
        <h1
          className="text-xl tracking-wide flex items-center gap-2"
          style={{ fontFamily: 'var(--font-display)', color: '#D4883A' }}
        >
          Bingo Mixer
          <span className="steam-float-animate" aria-hidden="true">☕</span>
        </h1>
        <div className="w-16" />
      </header>

      {/* Instructions */}
      <p
        className="text-center text-sm py-2 px-4 italic"
        style={{ fontFamily: 'var(--font-body)', color: '#D8CCB4' }}
      >
        Tap a square when you find someone who matches.
      </p>

      {/* Bingo banner */}
      {hasBingo && (
        <div
          className="text-center py-2 text-sm font-semibold tracking-widest banner-drop-animate"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(90deg, #2C1A0E 0%, #6B3A0A 50%, #2C1A0E 100%)',
            color: '#F5C97A',
            borderTop: '1px solid #D4883A',
            borderBottom: '1px solid #D4883A',
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
