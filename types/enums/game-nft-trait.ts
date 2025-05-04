export const GameNFTTrait = {
  // Style traits
  legendary: 'Legendary',
  prestige: 'Prestige',
  stealth: 'Stealth',
  highSpeed: 'High Speed',
  retro: 'Retro',
  heavyDuty: 'Heavy-Duty',
  muscle: 'Muscle',
  futuristic: 'Futuristic',

  // Race traits
  celestial: 'Celestial',
  pinkling: 'Pinkling',
  monkling: 'Monkling',
  necroling: 'Necroling',
  mesmerling: 'Mesmerling',
  knightling: 'Knightling',
  engineerling: 'Engineerling',
  ninjaling: 'Ninjaling',
  wizardling: 'Wizardling',
  rangerling: 'Rangerling',
  warriorling: 'Warriorling',
  waterling: 'Waterling',
  lightling: 'Lightling',
  earthling: 'Earthling',
  fireling: 'Fireling',

  // Spell Type traits
  earth: 'Earth',
  dark: 'Dark',
  fire: 'Fire'
} as const

export type GameNFTTraitType = typeof GameNFTTrait[keyof typeof GameNFTTrait] 