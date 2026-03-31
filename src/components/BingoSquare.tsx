import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

function squareStyle(
  isMarked: boolean,
  isWinning: boolean,
  isFreeSpace: boolean,
): React.CSSProperties {
  if (isFreeSpace) {
    return {
      background: 'var(--color-surface)',
      border: '2px solid var(--color-accent)',
      color: 'var(--color-text-primary)',
      cursor: 'default',
      borderRadius: 0,
    };
  }
  if (isMarked && isWinning) {
    return {
      background: 'var(--color-win-bg)',
      border: '2px solid var(--color-accent)',
      color: 'var(--color-text-primary)',
      borderRadius: 0,
    };
  }
  if (isMarked) {
    return {
      background: 'var(--color-marked-bg)',
      border: '2px solid var(--color-dark-brown)',
      color: 'var(--color-text-primary)',
      borderRadius: 0,
    };
  }
  return {
    background: 'var(--color-ivory)',
    border: '2px solid var(--color-text-muted)',
    color: 'var(--color-text-primary)',
    borderRadius: 0,
  };
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const style = squareStyle(square.isMarked, isWinning, square.isFreeSpace);

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={[
        'relative flex items-center justify-center p-1 text-center',
        'transition-all duration-150 select-none min-h-[60px] leading-tight',
        'active:scale-95',
        isWinning ? 'winning-glow' : '',
        !square.isMarked && !square.isFreeSpace ? 'hover:brightness-95' : '',
      ].join(' ')}
      style={{
        ...style,
        fontFamily: 'var(--font-body)',
        fontSize: '0.6rem',
      }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      {square.isFreeSpace ? (
        <span className="flex flex-col items-center gap-0.5">
          <span className="font-bold uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>FREE</span>
          <span className="italic" style={{ fontSize: '0.55rem', color: 'var(--color-text-secondary)' }}>— space —</span>
        </span>
      ) : (
        <span className="break-words hyphens-auto">{square.text}</span>
      )}
      {square.isMarked && !square.isFreeSpace && (
        <span
          className="stamp-check absolute top-0.5 right-0.5"
          style={{ fontSize: '0.6rem', lineHeight: 1, color: 'var(--color-accent)' }}
          aria-hidden="true"
        >
          ✦
        </span>
      )}
    </button>
  );
}
