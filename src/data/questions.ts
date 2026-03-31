import type { ThemeId, Theme } from '../types';

export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "has a pet",
  "prefers tea over coffee",
  "plays an instrument",
  "speaks more than 2 languages",
  "has run a marathon",
  "was born in a different state",
  "has met a celebrity",
  "can juggle",
  "has been skydiving",
  "loves cooking",
  "has a garden",
  "has traveled to Asia",
  "is left-handed",
  "has a twin",
  "plays video games",
  "does yoga",
  "has a hidden talent",
  "loves spicy food",
  "has been on TV",
  "collects something unique",
  "has read a book this month",
  "knows sign language",
];

export const officeHumourQuestions: string[] = [
  // Desk quirks
  "has a suspiciously large mug collection",
  "desk is covered in sticky notes",
  "has a plant that is definitely dying",
  "hoards office supplies",
  "has a standing desk they never stand at",
  "keyboard is louder than everyone else's",
  "has a motivational quote they ignore daily",
  "snack drawer fully stocked at all times",
  // Caffeine habits
  "can't function before first coffee",
  "has a precise tea steeping routine",
  "judges decaf drinkers silently",
  "always knows when a fresh pot is ready",
  "has their own personal coffee blend",
  "switches to herbal tea after lunch",
  "energy drink hidden in desk drawer",
  "arrived early just to get the good coffee",
  // Meeting hot takes
  "says 'this could have been an email'",
  "is always muted when they start speaking",
  "proposes a meeting to plan the next meeting",
  "quick sync that ran 45 minutes over",
  "multitasks visibly on video calls",
  "starts every meeting with 'can everyone hear me?'",
  "gives unsolicited updates on unrelated projects",
  "always the one who shares their screen correctly",
];

export const themes: Record<ThemeId, Theme> = {
  icebreaker: {
    id: 'icebreaker',
    label: 'Icebreaker',
    emoji: '🎉',
    description: 'Fun facts to find your people',
    questions,
  },
  office: {
    id: 'office',
    label: 'Office Humour',
    emoji: '☕',
    description: 'Desk quirks, caffeine habits & meeting hot takes',
    questions: officeHumourQuestions,
  },
};

export const FREE_SPACE = "FREE SPACE";
