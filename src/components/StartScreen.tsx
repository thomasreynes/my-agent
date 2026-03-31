interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-xs w-full">
        {/* Double-rule header */}
        <div
          className="mb-4"
          style={{ borderTop: '3px double var(--color-dark-brown)', paddingTop: '0.75rem' }}
        >
          <h1
            className="text-5xl leading-tight uppercase font-bold tracking-widest"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Bingo Mixer
          </h1>
        </div>
        <div style={{ borderTop: '3px double var(--color-dark-brown)', marginBottom: '1.5rem' }} aria-hidden="true" />

        <p
          className="text-base italic mb-8 tracking-wide"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
        >
          Find your people!
        </p>

        {/* Instructions panel with nested double-frame */}
        <div
          className="nested-frame p-5 mb-8 text-left"
          style={{ background: 'var(--color-surface)' }}
        >
          <h2
            className="text-sm uppercase tracking-widest mb-3 font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)', fontSize: '0.8rem' }}
          >
            How to play
          </h2>
          <ul
            className="text-sm space-y-2 italic"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)', lineHeight: 1.6 }}
          >
            <li className="flex gap-2">
              <span style={{ color: 'var(--color-accent)' }} className="shrink-0">—</span>
              Find people who match each square
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--color-accent)' }} className="shrink-0">—</span>
              Tap a square when you find a match
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--color-accent)' }} className="shrink-0">—</span>
              Get 5 in a row to win!
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full font-bold py-4 px-8 text-lg uppercase tracking-widest transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'var(--color-accent)',
            color: 'var(--color-ivory)',
            border: '2px solid var(--color-dark-brown)',
            borderRadius: 0,
            letterSpacing: '0.1em',
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
