import type { ThemeId, Theme } from '../types';
import { themes } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
  selectedTheme: ThemeId;
  onSelectTheme: (themeId: ThemeId) => void;
}

export function StartScreen({ onStart, selectedTheme, onSelectTheme }: StartScreenProps) {
  const activeTheme = themes[selectedTheme];

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-xs w-full">
        {/* Theme icon */}
        <div className="text-6xl mb-3 select-none" aria-hidden="true">{activeTheme.emoji}</div>

        <h1
          className="text-5xl text-amber mb-1 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Bingo Mixer
        </h1>
        <p
          className="text-chalk text-base italic mb-6 tracking-wide"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Find your people!
        </p>

        {/* Theme selector */}
        <div className="mb-6">
          <p
            className="text-amber-light text-xs uppercase tracking-widest mb-3 text-left"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Choose a theme
          </p>
          <div className="grid grid-cols-2 gap-3">
            {(Object.values(themes) as Theme[]).map((theme) => {
              const isSelected = selectedTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => onSelectTheme(theme.id)}
                  className="rounded-xl p-4 text-left transition-all duration-150 active:scale-95"
                  style={{
                    background: isSelected ? 'oklch(0.32 0.08 50 / 0.9)' : 'oklch(0.22 0.05 45 / 0.85)',
                    border: isSelected ? '2px solid #D4883A' : '1px solid oklch(0.45 0.08 50 / 0.5)',
                    outline: 'none',
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="text-2xl mb-1">{theme.emoji}</div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: isSelected ? '#F5C97A' : '#D8CCB4',
                    }}
                  >
                    {theme.label}
                  </div>
                  <div
                    className="text-xs leading-snug"
                    style={{ fontFamily: 'var(--font-body)', color: '#8A7A6A' }}
                  >
                    {theme.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

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
