export const RugDollz3DTrait = {
    // Dollz/Trollz base types
    DOLLZ: 'Dollz',
    TROLLZ: 'Trollz',
    // Legendary types
    LEGENDARY_ASSASSIN: 'Legendary Assassin',
    LEGENDARY_ENGINEER: 'Legendary Engineer',
    LEGENDARY_ILLUSIONIST: 'Legendary Illusionist',
    LEGENDARY_KNIGHT: 'Legendary Knight',
    LEGENDARY_MONK: 'Legendary Monk',
    LEGENDARY_NECROMANCER: 'Legendary Necromancer',
    LEGENDARY_PINK: 'Legendary Pink',
    LEGENDARY_RANGER: 'Legendary Ranger',
    LEGENDARY_TROLLZ_EARTH_KING: 'Legendary Trollz Earth King',
    LEGENDARY_TROLLZ_FIRE_KING: 'Legendary Trollz Fire King',
    LEGENDARY_TROLLZ_LIGHTNING_KING: 'Legendary Trollz Lightning King',
    LEGENDARY_TROLLZ_TIDAL_KING: 'Legendary Trollz Tidal King',
    LEGENDARY_WARRIOR: 'Legendary Warrior',
    LEGENDARY_WIZARD: 'Legendary Wizard',

    // Skin Combo colors
    SKIN_AURA: 'AURA',
    SKIN_PINK: 'Pink',
    SKIN_WHITE: 'White',
    SKIN_GREEN: 'Green',
    SKIN_RED: 'Red',
    SKIN_PURPLE: 'Purple',
    SKIN_BLUE: 'Blue',
    SKIN_GREY: 'Grey',
    SKIN_YELLOW: 'Yellow',
    SKIN_BLACK: 'Black',
    SKIN_DARK_BLUE: 'Dark Blue',
    SKIN_SILVER: 'Silver',
    SKIN_ORANGE: 'Orange',
    SKIN_BROWN: 'Brown',

    // Dollz Hero Armor
    ANGEL_WINGS: 'Angel Wings',
    RANGER_CLOAK: 'Ranger Cloak',
    WARRIOR_GARMENTS: 'Warrior Garments',
    SPARTAN_HELMET: 'Spartan Helmet',
    WIZARD_CLOAK: 'Wizard Cloak',
    CYBORG: 'Cyborg',
    NINJA: 'Ninja',

    // Power Up Items
    ANGEL_HALO: 'Angel Halo',
    BANDAGES: 'Bandages',
    BLINDFOLD: 'Blindfold',
    TROLLZ_MASK: 'Trollz Mask',
    MASQUERADE_MASK: 'Masquerade Mask',
    WIZARD_HAT: 'Wizard Hat',
    CYBORG_ARMS: 'Cyborg Arms',
    SPIKES_OF_UNDERWORLD: 'Spikes of the Underworld',
    DEVIL_HORNS_FIRE_CROWN: 'Devil Horns and Fire Crown',
    YOROI_MASK: 'Yoroi Mask',

    // Dollz Weapons
    BOW_AND_ARROW: 'Bow and Arrow',
    LARGE_BATTLE_AXE: 'Large Battle Axe',
    JAPANESE_FAN: 'Japanese Fan',
    SWORD_AND_SHIELD: 'Sword and Shield',
    MAGICAL_STAFF: 'Magical Staff',
    SPANNER_AND_GRENADE: 'Spanner and Grenade',
    DARK_STAFF: 'Dark Staff',
    SAMURAI_SWORD: 'Samurai Sword',

    // Background elements
    ELEMENTAL_LIGHTNING: 'Elemental Lightning',
    ELEMENTAL_WATER: 'Elemental Water',
    ELEMENTAL_EARTH: 'Elemental Earth',
    ELEMENTAL_FIRE: 'Elemental Fire',

    // Chaos items
    CHAOS_ACTIVATED: 'Activated',

    // Trollz Armor
    LEGENDARY_EARTH_ARMOR: 'Legendary Earth Armor',
    LEGENDARY_LIGHTNING_ARMOR: 'Legendary Lightning Armor',
    LEGENDARY_WATER_ARMOR: 'Legendary Water Armor',
    LEGENDARY_FIRE_ARMOR: 'Legendary Fire Armor',
    MERCHANT_TROLL_ARMOR: 'Merchant Troll Armor',
    CLOAKED_TROLL_ARMOR: 'Cloaked Troll Armor',
    GLADIATOR_TROLL_ARMOR: 'Gladiator Troll Armor',
    DEATH_TROLL_PLATE: 'Death Troll Plate',

    // Weapons
    DOLLZ_BREAKER: 'The DollzBreaker',
    RUGZ_PIERCER: 'The Rugz Piercer',
    RUGZ_INFUSED_TRIDENT: 'Rugz Infused Trident',
    ATTUNED_RUGSWORD: 'Attuned RugSword',
    RUGZ_CHAKRAM: 'Rugz Chakram',
    RUGZ_BANE: 'RugzBane',
    BONE_CRUSHER: 'Bone Crusher',
    BONE_KILLER: 'Bone Killer',
    RUG_CRASHER: 'The Rug Crasher',
    TWILIGHTS_AXE: 'Twilight\'s Axe',

    // Scars
    TROLLZ_SOLDIER: 'Trollz Soldier',
    BLOODSWORN_TROLL: 'Bloodsworn Troll',
    DOLLZ_BUTCHER: 'Dollz Butcher',
    WAR_CHIEF: 'War Chief',
    THE_UNSCARRED: 'The Unscarred'
} as const

export type RugDollz3DTraitType = typeof RugDollz3DTrait[keyof typeof RugDollz3DTrait] 