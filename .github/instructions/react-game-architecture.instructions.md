---
description: "Use when changing React components, hooks, TypeScript types, or bingo game logic in src/. Covers the repo's split between UI, state, and pure logic."
applyTo:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---
# React Game Architecture

- Prefer keeping components in `src/components` presentational. They should receive data and callbacks via props and avoid owning shared game state unless a local UI concern clearly belongs in the component.
- Prefer keeping game flow, persistence, and cross-component state transitions in hooks such as `src/hooks/useBingoGame.ts`.
- Prefer keeping reusable board rules and calculations in `src/utils` as pure functions with explicit inputs and outputs.
- Prefer putting shared domain types in `src/types` and importing them instead of redefining shapes inside components.
- When adding or changing bingo rules, update or add Vitest coverage alongside the related utility code.
- When styling TSX files, prefer the existing Tailwind utility approach and follow the separate Tailwind v4 instruction file.