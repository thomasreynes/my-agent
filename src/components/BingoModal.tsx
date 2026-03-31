interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ background: 'oklch(0.20 0.04 50 / 0.75)' }}
    >
      <div
        className="nested-frame p-7 max-w-xs w-full text-center animate-[bounce_0.4s_ease-out]"
        style={{
          background: 'var(--color-surface)',
        }}
      >
        {/* Coffee cup celebration */}
        <div className="text-6xl mb-3 select-none" aria-hidden="true">☕</div>

        <h2
          className="text-4xl mb-1 font-bold uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
        >
          BINGO!
        </h2>

        {/* Double-rule divider */}
        <div
          className="mx-auto my-3 w-24"
          style={{ borderTop: '3px double var(--color-dark-brown)' }}
          aria-hidden="true"
        />

        <p
          className="text-base italic mb-6"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
        >
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full font-bold py-3 px-6 uppercase tracking-widest transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'var(--color-accent)',
            color: 'var(--color-ivory)',
            border: '2px solid var(--color-dark-brown)',
            borderRadius: 0,
            letterSpacing: '0.1em',
            fontSize: '0.9rem',
          }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
