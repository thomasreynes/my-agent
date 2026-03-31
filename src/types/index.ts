/** Domain types for the Bingo game */

export interface BingoSquareData {
  id: number;
  text: string;
  isMarked: boolean;
  isFreeSpace: boolean;
}

export interface BingoLine {
  type: 'row' | 'column' | 'diagonal' | 'corners';
  index: number;
  squares: number[];
}

export type GameState = 'start' | 'playing' | 'bingo';

export type ThemeId = 'icebreaker' | 'office';

export interface Theme {
  id: ThemeId;
  label: string;
  emoji: string;
  description: string;
  questions: string[];
}
