export const DoruzuTraitCategory = {
    GENDER: 'Gender',
    CHAKRA: 'Chakra',
    BACKGROUND: 'Background',
    ACCESSORIES: 'Accessories',
    WEAPON: 'Weapon',
    FACE: 'Face',
    CLOTHES: 'Clothes'
} as const

export type DoruzuTraitCategoryType = typeof DoruzuTraitCategory[keyof typeof DoruzuTraitCategory]
