export const RugDollzOGTraitCategory = {
    LEGENDARY: 'legendary',
    BACKGROUND: 'Background',
    CLOTHES: 'Clothes',
    WEAPON: 'Weapon',
    MASK: 'Mask',
    HEADWEAR: 'Headwear',
    SKIN: 'Skin'
} as const

export type RugDollzOGTraitCategoryType = typeof RugDollzOGTraitCategory[keyof typeof RugDollzOGTraitCategory]
