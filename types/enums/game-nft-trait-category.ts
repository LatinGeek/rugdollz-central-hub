export const GameNFTTraitCategory = {
  style: 'Style',
  race: 'Race',
  spellType: 'Spell Type'
} as const

export type GameNFTTraitCategoryType = typeof GameNFTTraitCategory[keyof typeof GameNFTTraitCategory]
