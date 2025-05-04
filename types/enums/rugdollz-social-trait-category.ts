export const RugDollzSocialTraitCategory = {
    HAND_ITEMS: 'Hand Items',
    HATS: 'Hats',
    HOODIE: 'Hoodie',
    GLASSES: 'Glasses',
    EYES: 'Eyes'
} as const

export type RugDollzSocialTraitCategoryType = typeof RugDollzSocialTraitCategory[keyof typeof RugDollzSocialTraitCategory]
