import type React from 'react';
import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
  index?: number;
}

function squareStyle(
  isMarked: boolean,
  isWinning: boolean,
  isFreeSpace: boolean,
): React.CSSProperties {
  if (isFreeSpace) {
    return {
      background: 'linear-gradient(145deg, #3D2010 0%, #2C1A0E 100%)',
      border: '1px solid #D4883A',
      color: '#F5C97A',
      cursor: 'default',
    };
  }
  if (isMarked && isWinning) {
    return {
      background: 'linear-gradient(145deg, #7A4A0A 0%, #5C3008 100%)',
      border: '2px solid #F5C97A',
      color: '#F5ECD7',
    };
  }
  if (isMarked) {
    return {
      background: 'linear-gradient(145deg, #5C3D1A 0%, #3D2510 100%)',
      border: '1px solid #A0632A',
      color: '#EFE0BE',
    };
  }
  return {
    background: 'linear-gradient(145deg, #EFE0BE 0%, #E5D4A8 100%)',
    border: '1px solid #C8A870',
    color: '#2C1A0E',
  };
}

export function BingoSquare({ square, isWinning, onClick, index }: BingoSquareProps) {
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
        index !== undefined ? 'square-animate' : '',
      ].join(' ')}
      style={{
        ...style,
        fontFamily: 'var(--font-body)',
        boxShadow: isWinning
          ? undefined
          : 'inset 0 1px 0 oklch(0.95 0.04 70 / 0.3), 0 1px 3px oklch(0.08 0.04 40 / 0.5)',
        ...(index !== undefined ? { '--square-index': index } as React.CSSProperties : {}),
      }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span
          className="stamp-check absolute top-0.5 right-0.5 text-amber-glow"
          style={{ fontSize: '0.6rem', lineHeight: 1 }}
          aria-hidden="true"
        >
          ✓
        </span>
      )}
    </button>
  );
}
