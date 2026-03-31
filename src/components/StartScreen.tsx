interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-xs w-full">
        {/* Coffee cup icon */}
        <div className="text-6xl mb-3 select-none" aria-hidden="true">☕</div>

        <h1
          className="text-5xl text-amber mb-1 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Bingo Mixer
        </h1>
        <p
          className="text-chalk text-base italic mb-8 tracking-wide"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Find your people!
        </p>

        {/* Chalkboard instructions panel */}
        <div
          className="chalk-border rounded-xl p-5 mb-8 text-left"
          style={{ background: 'oklch(0.22 0.05 45 / 0.85)' }}
        >
          <h2
            className="text-amber-light text-sm uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem' }}
          >
            How to play
          </h2>
          <ul
            className="text-cream text-sm space-y-2 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <li className="flex gap-2">
              <span className="text-amber shrink-0">—</span>
              Find people who match each square
            </li>
            <li className="flex gap-2">
              <span className="text-amber shrink-0">—</span>
              Tap a square when you find a match
            </li>
            <li className="flex gap-2">
              <span className="text-amber shrink-0">—</span>
              Get 5 in a row to win!
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(160deg, #D4883A 0%, #B86A1C 100%)',
            color: '#1A0F07',
            boxShadow: '0 4px 18px oklch(0.55 0.15 50 / 0.45), inset 0 1px 0 oklch(0.85 0.12 70 / 0.4)',
            letterSpacing: '0.05em',
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
