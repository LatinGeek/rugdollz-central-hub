export const RugDollzSocialTrait = {
    // Hand Items
    GAMING_CONTROLLER: 'Gaming Controller',
    PLANE: 'Plane',
    FOOD_FRYING_PAN: 'Food Frying Pan',
    DUMBEL: 'Dumbel',
    MUSIC_GUITAR: 'Music Guitar',
    MOTORING_SPANNER: 'Motoring Spanner',
    FINANCE_BRIEFCASE: 'Finance Briefcase',
    CREATIVE_ARTS_ART_EASEL: 'Creative arts Art easel',
    SPORT_TROPHY: 'Sport Trophy',
    SOCIALIZE_POPCORN: 'Socialize Popcorn',

    // Hats
    BEANIE: 'Beanie',
    CAP: 'Cap',
    CAP_BACK: 'Cap Back',
    BOWL_BUCKET_HAT: 'Bowl bucket hat',
    TOPHAT: 'Tophat',

    // Hoodie
    RUGDOLLZ_COAT_RED: 'RugDollz Coat Red with black logo',
    HOODIE_WITH: 'Hoodie with',
    RUGLABZ_COAT_BLUE: 'RugLabz Coat Blue with small logo',
    GOLD_RUGLABZ_HOODIE: 'Gold RugLabz Hoodie with black logo',
    BLACK_HOODIE_RDZ: 'Black Hoodie with RDZ front',

    // Glasses
    RAVE_GLASSES: 'RAVE Glasses',
    GLASSES: 'Glasses',
    BLACK_SUNGLASSES: 'Black Sunglasses',
    AVIATORS: 'Aviators',
    RUGDOLLZ_LOGO_GLASSES: 'RugDollz logo Glasses',
    RDZ_G: 'RDZ G',

    // Eyes
    DARK_EYES: 'Dark eyes',
    BITCOIN_EYES: 'Bitcoin eyes',
    RED_EYES: 'Red eyes',
    CYBER_EYES: 'Cyber eyes',
    ETHEREUM_EYES: 'Ethereum eyes'
} as const

export type RugDollzSocialTraitType = typeof RugDollzSocialTrait[keyof typeof RugDollzSocialTrait] 