import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { Collection } from '@/types/enums/collection';
import { DoruzuTraitCategory } from '@/types/enums/doruzu-trait-category';
import { DoruzuTrait } from '@/types/enums/doruzu-trait';
import { BadgeRequirementEarnCondition } from '@/types/enums/badge-requirement-earn-condition';

export const DoruzuBadgeRequirements: BadgeRequirement[] = [
  {
    id: 'own-doruzu-token',
    title: 'Own one Doruzu token',
    points: 1000,
    collection: Collection.doruzu,
    traitCategory: null,
    traitValues: [],
    earnCondition: BadgeRequirementEarnCondition.OWN_ONE_TOKEN
  },
  {
    id: 'own-doruzu-divine',
    title: 'Own one Doruzu with trait (Divine)',
    points: 1200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.GENDER,
    traitValues: [DoruzuTrait.DIVINE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-death-mask',
    title: 'Own one Doruzu with Face trait (Death Mask)',
    points: 700,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.DEATH_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-stealth-mask',
    title: 'Own one Doruzu with Face trait (Stealth Mask)',
    points: 700,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.STEALTH_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-barrel-sunglasses',
    title: 'Own one Doruzu with Face trait (Barrel Sunglasses)',
    points: 700,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.BARREL_SUNGLASSES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-blue-shades',
    title: 'Own one Doruzu with Face trait (Blue Shades)',
    points: 700,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.BLUE_SHADES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-dark-shades',
    title: 'Own one Doruzu with Face trait (Dark Shades)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.DARK_SHADES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-orange-shades',
    title: 'Own one Doruzu with Face trait (Orange Shades)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.ORANGE_SHADES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-eye-patch',
    title: 'Own one Doruzu with Face trait (Eye Patch)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.EYE_PATCH],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-beard',
    title: 'Own one Doruzu with Face trait (Beard)',
    points: 700,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.BEARD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-bushy-goatee',
    title: 'Own one Doruzu with Face trait (Bushy Goatee)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.BUSHY_GOATEE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-mustache',
    title: 'Own one Doruzu with Face trait (Mustache)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.MUSTACHE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-goatee',
    title: 'Own one Doruzu with Face trait (Goatee)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.GOATEE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-lightning',
    title: 'Own one Doruzu with Face trait (Lightning)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.FACE_LIGHTNING],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-earth',
    title: 'Own one Doruzu with Face trait (Earth)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.FACE_EARTH],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-water',
    title: 'Own one Doruzu with Face trait (Water)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.FACE_WATER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-fire',
    title: 'Own one Doruzu with Face trait (Fire)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.FACE_FIRE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-glowing',
    title: 'Own one Doruzu with Face trait (Glowing)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.FACE_GLOWING],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-chakra-eyes',
    title: 'Own one Doruzu with Face trait (Chakra Eyes)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.CHAKRA_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-gradient',
    title: 'Own one Doruzu with Face trait (Gradient)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.GRADIENT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-cat-eyes',
    title: 'Own one Doruzu with Face trait (Cat Eyes)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.CAT_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-demon-eyes',
    title: 'Own one Doruzu with Face trait (Demon Eyes)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.DEMON_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-multicolor',
    title: 'Own one Doruzu with Face trait (Multicolor)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.MULTICOLOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-silver',
    title: 'Own one Doruzu with Face trait (Silver)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.SILVER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-gold',
    title: 'Own one Doruzu with Face trait (Gold)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.GOLD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-face-cigar',
    title: 'Own one Doruzu with Face trait (Cigar)',
    points: 700,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.FACE,
    traitValues: [DoruzuTrait.CIGAR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-air',
    title: 'Own one Doruzu with Chakra trait (Air)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.AIR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-root',
    title: 'Own one Doruzu with Chakra trait (Root)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.ROOT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-crown',
    title: 'Own one Doruzu with Chakra trait (Crown)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.CROWN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-water',
    title: 'Own one Doruzu with Chakra trait (Water)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.WATER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-ice',
    title: 'Own one Doruzu with Chakra trait (Ice)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.ICE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-sacral',
    title: 'Own one Doruzu with Chakra trait (Sacral)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.SACRAL],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-lightning',
    title: 'Own one Doruzu with Chakra trait (Lightning)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.LIGHTNING],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-solar-plexus',
    title: 'Own one Doruzu with Chakra trait (Solar Plexus)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.SOLAR_PLEXUS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-light-aura',
    title: 'Own one Doruzu with Chakra trait (Light Aura)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.LIGHT_AURA],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-third-eye',
    title: 'Own one Doruzu with Chakra trait (Third Eye)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.THIRD_EYE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-throat',
    title: 'Own one Doruzu with Chakra trait (Throat)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.THROAT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-chakra-fire',
    title: 'Own one Doruzu with Chakra trait (Fire)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CHAKRA,
    traitValues: [DoruzuTrait.FIRE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-night-moon',
    title: 'Own one Doruzu with Background trait (Night Moon)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.NIGHT_MOON],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-water',
    title: 'Own one Doruzu with Background trait (Water)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.WATER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-moon-wolf',
    title: 'Own one Doruzu with Background trait (Moon Wolf)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.MOON_WOLF],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-sigma',
    title: 'Own one Doruzu with Background trait (Sigma)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.SIGMA],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-dungeon',
    title: 'Own one Doruzu with Background trait (Dungeon)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.DUNGEON],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-island',
    title: 'Own one Doruzu with Background trait (Island)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.ISLAND],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-fire',
    title: 'Own one Doruzu with Background trait (Fire)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.FIRE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-shrine',
    title: 'Own one Doruzu with Background trait (Shrine)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.SHRINE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-abstract',
    title: 'Own one Doruzu with Background trait (Abstract)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.ABSTRACT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-cloud-big-sun',
    title: 'Own one Doruzu with Background trait (Cloud Big Sun)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.CLOUD_BIG_SUN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-night-moon-cloud',
    title: 'Own one Doruzu with Background trait (Night Moon Cloud)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.NIGHT_MOON_CLOUD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-pink-moon',
    title: 'Own one Doruzu with Background trait (Pink Moon)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.PINK_MOON],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-night-moon-cloud-stars',
    title: 'Own one Doruzu with Background trait (Night Moon Cloud Stars)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.NIGHT_MOON_CLOUD_STARS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-thunder',
    title: 'Own one Doruzu with Background trait (Thunder)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.THUNDER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-city-light',
    title: 'Own one Doruzu with Background trait (City Light)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.CITY_LIGHT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-battle',
    title: 'Own one Doruzu with Background trait (Battle)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.BATTLE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-background-ice',
    title: 'Own one Doruzu with Background trait (Ice)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.BACKGROUND,
    traitValues: [DoruzuTrait.ICE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-accessories-spirit-companions',
    title: 'Own one Doruzu with Accessories trait (Spirit Companions)',
    points: 666,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.ACCESSORIES,
    traitValues: [DoruzuTrait.SPIRIT_COMPANIONS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-dragon-sword',
    title: 'Own one Doruzu with Weapon trait (Dragon Sword)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.DRAGON_SWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-light-saber',
    title: 'Own one Doruzu with Weapon trait (Light Saber)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.LIGHT_SABER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-holy-sword',
    title: 'Own one Doruzu with Weapon trait (Holy Sword)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.HOLY_SWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-elemental-sword',
    title: 'Own one Doruzu with Weapon trait (Elemental Sword)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.ELEMENTAL_SWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-double-edged-sword',
    title: 'Own one Doruzu with Weapon trait (Double Edged Sword)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.DOUBLE_EDGED_SWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-dual-axes',
    title: 'Own one Doruzu with Weapon trait (Dual Axes)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.DUAL_AXES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-energy-blades',
    title: 'Own one Doruzu with Weapon trait (Energy Blades)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.ENERGY_BLADES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-dual-swords',
    title: 'Own one Doruzu with Weapon trait (Dual Swords)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.DUAL_SWORDS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-cyborg-arms',
    title: 'Own one Doruzu with Weapon trait (Cyborg Arms)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.CYBORG_ARMS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-gauntlets',
    title: 'Own one Doruzu with Weapon trait (Gauntlets)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.GAUNTLETS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-plasma-gun',
    title: 'Own one Doruzu with Weapon trait (Plasma Gun)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.PLASMA_GUN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-winchester-shotgun',
    title: 'Own one Doruzu with Weapon trait (Winchester Shotgun)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.WINCHESTER_SHOTGUN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-hand-gun',
    title: 'Own one Doruzu with Weapon trait (Hand Gun)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.HAND_GUN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-gunblade',
    title: 'Own one Doruzu with Weapon trait (Gunblade)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.GUNBLADE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-crossbow',
    title: 'Own one Doruzu with Weapon trait (Crossbow)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.CROSSBOW],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-bow-and-arrow',
    title: 'Own one Doruzu with Weapon trait (Bow And Arrow)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.BOW_AND_ARROW],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-magical-wand',
    title: 'Own one Doruzu with Weapon trait (Magical Wand)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.MAGICAL_WAND],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-energy-whip',
    title: 'Own one Doruzu with Weapon trait (Energy Whip)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.ENERGY_WHIP],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-spell-cards',
    title: 'Own one Doruzu with Weapon trait (Spell Cards)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.SPELL_CARDS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-ring-of-destiny',
    title: 'Own one Doruzu with Weapon trait (Ring of Destiny)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.RING_OF_DESTINY],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-elemental-orbs',
    title: 'Own one Doruzu with Weapon trait (Elemental Orbs)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.ELEMENTAL_ORBS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-magic-staff',
    title: 'Own one Doruzu with Weapon trait (Magic Staff)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.MAGIC_STAFF],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-bo-staff',
    title: 'Own one Doruzu with Weapon trait (Bo Staff)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.BO_STAFF],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-shuriken',
    title: 'Own one Doruzu with Weapon trait (Shuriken)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.SHURIKEN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-nunchucks',
    title: 'Own one Doruzu with Weapon trait (Nunchucks)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.NUNCHUCKS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-kunai',
    title: 'Own one Doruzu with Weapon trait (Kunai)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.KUNAI],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-fan-blades',
    title: 'Own one Doruzu with Weapon trait (Fan Blades)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.FAN_BLADES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-weapon-katana',
    title: 'Own one Doruzu with Weapon trait (Katana)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.WEAPON,
    traitValues: [DoruzuTrait.KATANA],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  // Clothes trait requirements
  {
    id: 'own-doruzu-clothes-winged-royal-white-dress',
    title: 'Own one Doruzu with Clothes trait (Winged Royal White Dress)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.WINGED_ROYAL_WHITE_DRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-winged-warrior-princess',
    title: 'Own one Doruzu with Clothes trait (Winged Warrior Princess)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.WINGED_WARRIOR_PRINCESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-winged-royal-dress',
    title: 'Own one Doruzu with Clothes trait (Winged Royal Dress)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.WINGED_ROYAL_DRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-winged-battle-dress',
    title: 'Own one Doruzu with Clothes trait (Winged Battle Dress)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.WINGED_BATTLE_DRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-gothic-lolita',
    title: 'Own one Doruzu with Clothes trait (Gothic Lolita)',
    points: 700,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.GOTHIC_LOLITA],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-steampunk-corset',
    title: 'Own one Doruzu with Clothes trait (Steampunk Corset)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.STEAMPUNK_CORSET],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-maiden-gown',
    title: 'Own one Doruzu with Clothes trait (Maiden Gown)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.MAIDEN_GOWN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-low-cut-dress',
    title: 'Own one Doruzu with Clothes trait (Low Cut Dress)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.LOW_CUT_DRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-royal-white-dress',
    title: 'Own one Doruzu with Clothes trait (Royal White Dress)',
    points: 600,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.ROYAL_WHITE_DRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-royal-dress',
    title: 'Own one Doruzu with Clothes trait (Royal Dress)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.ROYAL_DRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-kingsguard-armor',
    title: 'Own one Doruzu with Clothes trait (Kingsguard Armor)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.KINGSGUARD_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-battle-dress',
    title: 'Own one Doruzu with Clothes trait (Battle Dress)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.BATTLE_DRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-heroine-armor',
    title: 'Own one Doruzu with Clothes trait (Heroine Armor)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.HEROINE_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-divine-armor',
    title: 'Own one Doruzu with Clothes trait (Divine Armor)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.DIVINE_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-blue-casual-top',
    title: 'Own one Doruzu with Clothes trait (Blue Casual Top)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.BLUE_CASUAL_TOP],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-casual-outfit-male',
    title: 'Own one Doruzu with Clothes trait (Casual Outfit Male)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.CASUAL_OUTFIT_MALE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-red-casual-shirt',
    title: 'Own one Doruzu with Clothes trait (Red Casual Shirt)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.RED_CASUAL_SHIRT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-casual-black-hoodie',
    title: 'Own one Doruzu with Clothes trait (Casual Black Hoodie)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.CASUAL_BLACK_HOODIE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-urban-punkess',
    title: 'Own one Doruzu with Clothes trait (Urban Punkess)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.URBAN_PUNKESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-futuristic-armor',
    title: 'Own one Doruzu with Clothes trait (Futuristic Armor)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.FUTURISTIC_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-demonslayer',
    title: 'Own one Doruzu with Clothes trait (Demonslayer)',
    points: 500,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.DEMONSLAYER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-shrine-maiden',
    title: 'Own one Doruzu with Clothes trait (Shrine Maiden)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.SHRINE_MAIDEN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-legendary-kimono',
    title: 'Own one Doruzu with Clothes trait (Legendary Kimono)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.LEGENDARY_KIMONO],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-monk',
    title: 'Own one Doruzu with Clothes trait (Monk)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.MONK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-kimono',
    title: 'Own one Doruzu with Clothes trait (Kimono)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.KIMONO],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-festival-kimono',
    title: 'Own one Doruzu with Clothes trait (Festival Kimono)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.FESTIVAL_KIMONO],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-robes-of-wisdom',
    title: 'Own one Doruzu with Clothes trait (Robes of Wisdom)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.ROBES_OF_WISDOM],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-ice-suit',
    title: 'Own one Doruzu with Clothes trait (Ice Suit)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.ICE_SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-purple-cape',
    title: 'Own one Doruzu with Clothes trait (Purple Cape)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.PURPLE_CAPE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-elemental-robes',
    title: 'Own one Doruzu with Clothes trait (Elemental Robes)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.ELEMENTAL_ROBES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-celestial-robe',
    title: 'Own one Doruzu with Clothes trait (Celestial Robe)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.CELESTIAL_ROBE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-witch-robe',
    title: 'Own one Doruzu with Clothes trait (Witch Robe)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.WITCH_ROBE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-obsidian-armor',
    title: 'Own one Doruzu with Clothes trait (Obsidian Armor)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.OBSIDIAN_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-demon-lord',
    title: 'Own one Doruzu with Clothes trait (Demon Lord)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.DEMON_LORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-dragon-scale-armor',
    title: 'Own one Doruzu with Clothes trait (Dragon Scale Armor)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.DRAGON_SCALE_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-tactical',
    title: 'Own one Doruzu with Clothes trait (Tactical)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.TACTICAL],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-sci-fi-jumpsuit',
    title: 'Own one Doruzu with Clothes trait (Sci Fi Jumpsuit)',
    points: 300,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.SCI_FI_JUMPSUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-space-suit',
    title: 'Own one Doruzu with Clothes trait (Space Suit)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.SPACE_SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-mecha-pilot',
    title: 'Own one Doruzu with Clothes trait (Mecha Pilot)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.MECHA_PILOT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-tactical-vest',
    title: 'Own one Doruzu with Clothes trait (Tactical Vest)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.TACTICAL_VEST],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-mechanic-jumpsuit',
    title: 'Own one Doruzu with Clothes trait (Mechanic Jumpsuit)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.MECHANIC_JUMPSUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-assassin',
    title: 'Own one Doruzu with Clothes trait (Assassin)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.ASSASSIN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-stealth-armor',
    title: 'Own one Doruzu with Clothes trait (Stealth Armor)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.STEALTH_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-ninja-outfit',
    title: 'Own one Doruzu with Clothes trait (Ninja Outfit)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.NINJA_OUTFIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-pirate-female',
    title: 'Own one Doruzu with Clothes trait (Pirate Female)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.PIRATE_FEMALE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-pirate-male',
    title: 'Own one Doruzu with Clothes trait (Pirate Male)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.PIRATE_MALE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-suit',
    title: 'Own one Doruzu with Clothes trait (Suit)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-school-uniform-girl',
    title: 'Own one Doruzu with Clothes trait (School Uniform Girl)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.SCHOOL_UNIFORM_GIRL],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-school-uniform-boy',
    title: 'Own one Doruzu with Clothes trait (School Uniform Boy)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.SCHOOL_UNIFORM_BOY],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-magic-school-outfit',
    title: 'Own one Doruzu with Clothes trait (Magic School Outfit)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.MAGIC_SCHOOL_OUTFIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-bandit-coat',
    title: 'Own one Doruzu with Clothes trait (Bandit Coat)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.BANDIT_COAT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-trench-coat',
    title: 'Own one Doruzu with Clothes trait (Trench Coat)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.TRENCH_COAT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-cyberpunk-jacket',
    title: 'Own one Doruzu with Clothes trait (Cyberpunk Jacket)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.CYBERPUNK_JACKET],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-red-casual-jacket',
    title: 'Own one Doruzu with Clothes trait (Red Casual Jacket)',
    points: 400,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.RED_CASUAL_JACKET],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-black-sport-hoodie',
    title: 'Own one Doruzu with Clothes trait (Black Sport Hoodie)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.BLACK_SPORT_HOODIE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-doruzu-clothes-blue-sport-hoodie',
    title: 'Own one Doruzu with Clothes trait (Blue Sport Hoodie)',
    points: 200,
    collection: Collection.doruzu,
    traitCategory: DoruzuTraitCategory.CLOTHES,
    traitValues: [DoruzuTrait.BLUE_SPORT_HOODIE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  }
];



