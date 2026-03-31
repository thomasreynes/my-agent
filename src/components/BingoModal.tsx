interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ background: 'oklch(0.08 0.04 40 / 0.82)' }}
    >
      <div
        className="chalk-border rounded-2xl p-7 max-w-xs w-full text-center chalkboard-flip-animate"
        style={{
          background: 'linear-gradient(160deg, #3D2010 0%, #2C1A0E 100%)',
        }}
      >
        {/* Coffee cup celebration */}
        <div className="text-6xl mb-3 select-none" aria-hidden="true">☕</div>

        <h2
          className="text-4xl mb-1"
          style={{ fontFamily: 'var(--font-display)', color: '#F5C97A' }}
        >
          BINGO!
        </h2>

        {/* Decorative rule */}
        <div
          className="mx-auto my-3 h-px w-24"
          style={{ background: 'linear-gradient(90deg, transparent, #D4883A, transparent)' }}
          aria-hidden="true"
        />

        <p
          className="text-base italic mb-6"
          style={{ fontFamily: 'var(--font-body)', color: '#D8CCB4' }}
        >
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full font-semibold py-3 px-6 rounded-xl transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(160deg, #D4883A 0%, #B86A1C 100%)',
            color: '#1A0F07',
            boxShadow: '0 4px 18px oklch(0.55 0.15 50 / 0.45), inset 0 1px 0 oklch(0.85 0.12 70 / 0.4)',
            letterSpacing: '0.05em',
            fontSize: '0.9rem',
          }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
