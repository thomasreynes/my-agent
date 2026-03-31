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
          className="text-5xl mb-1 leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#2A2016' }}
        >
          Bingo Mixer
        </h1>
        <p
          className="text-base italic mb-8 tracking-wide"
          style={{ fontFamily: 'var(--font-body)', color: '#6B6055' }}
        >
          Find your people!
        </p>

        {/* Instructions panel */}
        <div
          className="card-border rounded-xl p-5 mb-8 text-left"
          style={{ background: '#FFFFFF' }}
        >
          <h2
            className="text-sm uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: '#5C8A6A' }}
          >
            How to play
          </h2>
          <ul
            className="text-sm space-y-2 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: '#2A2016' }}
          >
            <li className="flex gap-2">
              <span className="shrink-0" style={{ color: '#5C8A6A' }}>—</span>
              Find people who match each square
            </li>
            <li className="flex gap-2">
              <span className="shrink-0" style={{ color: '#5C8A6A' }}>—</span>
              Tap a square when you find a match
            </li>
            <li className="flex gap-2">
              <span className="shrink-0" style={{ color: '#5C8A6A' }}>—</span>
              Get 5 in a row to win!
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(160deg, #5C8A6A 0%, #3D6B52 100%)',
            color: '#FFFFFF',
            boxShadow: '0 4px 18px rgba(92, 138, 106, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
            letterSpacing: '0.05em',
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
