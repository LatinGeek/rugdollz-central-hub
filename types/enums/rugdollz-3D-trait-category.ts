export const RugDollz3DTraitCategory = {
    DOLLZ_TROLLZ: 'Dollz/Trollz',
    LEGENDARY: 'Legendary',
    SKIN_COMBO: 'Skin Combo',
    DOLLZ_HERO_ARMOR: 'Dollz Hero Armor',
    POWER_UP_ITEM: 'Power Up Item',
    DOLLZ_WEAPON: 'Dollz Weapon',
    BACKGROUND: 'Background',
    CHAOS_GLOVES: 'Chaos Gloves',
    CHAOS_WEAPON_POWER: 'Chaos Weapon Power',
    TROLLZ_ARMOR: 'Trollz Armor',
    WEAPONS: 'Weapons',
    SCARS: 'Scars'
} as const

export type RugDollz3DTraitCategoryType = typeof RugDollz3DTraitCategory[keyof typeof RugDollz3DTraitCategory]
