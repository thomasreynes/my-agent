interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ background: 'rgba(42, 32, 22, 0.55)' }}
    >
      <div
        className="card-border rounded-2xl p-7 max-w-xs w-full text-center animate-[bounce_0.4s_ease-out]"
        style={{
          background: '#FFFFFF',
        }}
      >
        {/* Coffee cup celebration */}
        <div className="text-6xl mb-3 select-none" aria-hidden="true">☕</div>

        <h2
          className="text-4xl mb-1"
          style={{ fontFamily: 'var(--font-display)', color: '#2A2016' }}
        >
          BINGO!
        </h2>

        {/* Decorative rule */}
        <div
          className="mx-auto my-3 h-px w-24"
          style={{ background: 'linear-gradient(90deg, transparent, #5C8A6A, transparent)' }}
          aria-hidden="true"
        />

        <p
          className="text-base italic mb-6"
          style={{ fontFamily: 'var(--font-body)', color: '#6B6055' }}
        >
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full font-semibold py-3 px-6 rounded-xl transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(160deg, #5C8A6A 0%, #3D6B52 100%)',
            color: '#FFFFFF',
            boxShadow: '0 4px 18px rgba(92, 138, 106, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
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
