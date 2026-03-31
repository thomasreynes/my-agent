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
      {/* Header — antique menu bar with double-rules */}
      <header
        className="px-3 py-3 text-center"
        style={{
          background: 'var(--color-surface)',
          borderBottom: '3px double var(--color-dark-brown)',
        }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={onReset}
            className="text-sm px-3 py-1.5 uppercase tracking-wide font-bold transition-all duration-150 active:scale-95"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-ivory)',
              background: 'var(--color-accent)',
              border: '2px solid var(--color-dark-brown)',
              borderRadius: 0,
            }}
          >
            ← Back
          </button>
          <h1
            className="text-2xl font-bold uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Bingo Mixer
          </h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Instructions */}
      <p
        className="text-center text-sm py-2 px-4 italic"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
      >
        Tap a square when you find someone who matches.
      </p>

      {/* Bingo banner — double-ruled */}
      {hasBingo && (
        <div
          className="text-center py-2 text-sm font-bold tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'var(--color-marked-bg)',
            color: 'var(--color-accent)',
            borderTop: '3px double var(--color-dark-brown)',
            borderBottom: '3px double var(--color-dark-brown)',
            fontSize: '0.85rem',
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
