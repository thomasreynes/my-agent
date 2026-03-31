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
      background: '#F0FAF2',
      border: '1px solid #5C8A6A',
      color: '#1E3D28',
      cursor: 'default',
    };
  }
  if (isMarked && isWinning) {
    return {
      background: '#C8E6CC',
      border: '2px solid #3D7A52',
      color: '#1E3D28',
    };
  }
  if (isMarked) {
    return {
      background: '#EAF4EC',
      border: '1px solid #5C8A6A',
      color: '#1E3D28',
    };
  }
  return {
    background: '#FFFFFF',
    border: '1px solid #D4C9B0',
    color: '#2A2016',
  };
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const style = squareStyle(square.isMarked, isWinning, square.isFreeSpace);

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={[
        'relative flex items-center justify-center p-1 text-center rounded',
        'transition-all duration-150 select-none min-h-[60px] text-[0.65rem] leading-tight',
        'active:scale-95',
        isWinning ? 'winning-glow' : '',
        !square.isMarked && !square.isFreeSpace ? 'hover:brightness-95' : '',
      ].join(' ')}
      style={{
        ...style,
        fontFamily: 'var(--font-body)',
        boxShadow: isWinning
          ? undefined
          : 'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 1px 3px rgba(90, 70, 40, 0.1)',
      }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span
          className="stamp-check absolute top-0.5 right-0.5"
          style={{ fontSize: '0.6rem', lineHeight: 1, color: '#5C8A6A' }}
          aria-hidden="true"
        >
          ✓
        </span>
      )}
    </button>
  );
}
