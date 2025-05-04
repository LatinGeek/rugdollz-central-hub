import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { Collection } from '@/types/enums/collection';
import { RugDollz3DTraitCategory } from '@/types/enums/rugdollz-3D-trait-category';
import { RugDollz3DTrait } from '@/types/enums/rugdollz-3D-trait';
import { BadgeRequirementEarnCondition } from '@/types/enums/badge-requirement-earn-condition';

export const RugDollz3DBadgeRequirements: BadgeRequirement[] = [
  {
    id: 'own-3d-dollz-token',
    title: 'Own one RugDollz 3D token (Dollz)',
    points: 1000,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_TROLLZ,
    traitValues: [RugDollz3DTrait.DOLLZ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ONE_TOKEN
  },
  {
    id: 'own-3d-trollz-token',
    title: 'Own one RugTrollz 3D token (Trollz)',
    points: 1000,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_TROLLZ,
    traitValues: [RugDollz3DTrait.TROLLZ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ONE_TOKEN
  },
  {
    id: 'own-3d-skin-purple',
    title: 'Own a 3D with Skin Combo trait (Purple)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_PURPLE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-masquerade-mask',
    title: 'Own a 3D with trait (Masquerade Mask)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.MASQUERADE_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-japanese-fan',
    title: 'Own a 3D with trait (Japanese Fan)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.JAPANESE_FAN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-blue',
    title: 'Own a 3D with Skin Combo trait (Blue)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_BLUE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-spartan-helmet',
    title: 'Own a 3D with trait (Spartan Helmet)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.SPARTAN_HELMET],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-sword-and-shield',
    title: 'Own a 3D with trait (Sword and Shield)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.SWORD_AND_SHIELD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-grey',
    title: 'Own a 3D with Skin Combo trait (Grey)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_GREY],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-wizard-cloak',
    title: 'Own a 3D with trait (Wizard Cloak)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_HERO_ARMOR,
    traitValues: [RugDollz3DTrait.WIZARD_CLOAK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-wizard-hat',
    title: 'Own a 3D with trait (Wizard Hat)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.WIZARD_HAT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-magical-staff',
    title: 'Own a 3D with trait (Magical Staff)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.MAGICAL_STAFF],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-yellow',
    title: 'Own a 3D with Skin Combo trait (Yellow)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_YELLOW],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-cyborg',
    title: 'Own a 3D with trait (Cyborg)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_HERO_ARMOR,
    traitValues: [RugDollz3DTrait.CYBORG],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-cyborg-arms',
    title: 'Own a 3D with trait (Cyborg Arms)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.CYBORG_ARMS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-spanner-and-grenade',
    title: 'Own a 3D with trait (Spanner and Grenade)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.SPANNER_AND_GRENADE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-legendary',
    title: 'Own one RugDollz 3D with trait (Legendary)',
    points: 1200,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.LEGENDARY,
    traitValues: [
      RugDollz3DTrait.LEGENDARY_ASSASSIN,
      RugDollz3DTrait.LEGENDARY_ENGINEER,
      RugDollz3DTrait.LEGENDARY_ILLUSIONIST,
      RugDollz3DTrait.LEGENDARY_KNIGHT,
      RugDollz3DTrait.LEGENDARY_MONK,
      RugDollz3DTrait.LEGENDARY_NECROMANCER,
      RugDollz3DTrait.LEGENDARY_PINK,
      RugDollz3DTrait.LEGENDARY_RANGER,
      RugDollz3DTrait.LEGENDARY_TROLLZ_EARTH_KING,
      RugDollz3DTrait.LEGENDARY_TROLLZ_FIRE_KING,
      RugDollz3DTrait.LEGENDARY_TROLLZ_LIGHTNING_KING,
      RugDollz3DTrait.LEGENDARY_TROLLZ_TIDAL_KING,
      RugDollz3DTrait.LEGENDARY_WARRIOR,
      RugDollz3DTrait.LEGENDARY_WIZARD
    ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-aura',
    title: 'AURA',
    points: 1000,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_AURA],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-pink',
    title: 'Own a 3D with Skin Combo trait (Pink)',
    points: 1000,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_PINK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-white',
    title: 'Own a 3D with Skin Combo trait (White)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_WHITE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-angel-wings',
    title: 'Own a 3D with trait (Angel Wings)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_HERO_ARMOR,
    traitValues: [RugDollz3DTrait.ANGEL_WINGS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-angel-halo',
    title: 'Own a 3D with trait (Angel Halo)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.ANGEL_HALO],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-bandages',
    title: 'Own a 3D with trait (Bandages)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.BANDAGES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-green',
    title: 'Own a 3D with Skin Combo trait (Green)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_GREEN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-ranger-cloak',
    title: 'Own a 3D with trait (Ranger Cloak)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_HERO_ARMOR,
    traitValues: [RugDollz3DTrait.RANGER_CLOAK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-blindfold',
    title: 'Own a 3D with trait (Blindfold)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.BLINDFOLD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-bow-and-arrow',
    title: 'Own a 3D with trait (Bow and Arrow)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.BOW_AND_ARROW],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-red',
    title: 'Own a 3D with Skin Combo trait (Red)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_RED],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-warrior-garments',
    title: 'Own a 3D with trait (Warrior Garments)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_HERO_ARMOR,
    traitValues: [RugDollz3DTrait.WARRIOR_GARMENTS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-trollz-mask',
    title: 'Own a 3D with trait (Trollz Mask)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.TROLLZ_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-large-battle-axe',
    title: 'Own a 3D with trait (Large Battle Axe)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.LARGE_BATTLE_AXE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-black',
    title: 'Own a 3D with Skin Combo trait (Black)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_BLACK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-spikes-underworld',
    title: 'Own a 3D with trait (Spikes of the Underworld)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_HERO_ARMOR,
    traitValues: [RugDollz3DTrait.SPIKES_OF_UNDERWORLD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-devil-horns',
    title: 'Own a 3D with trait (Devil Horns and Fire Crown)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.DEVIL_HORNS_FIRE_CROWN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-dark-staff',
    title: 'Own a 3D with trait (Dark Staff)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.DARK_STAFF],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-skin-dark-blue',
    title: 'Own a 3D with Skin Combo trait (Dark Blue)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SKIN_COMBO,
    traitValues: [RugDollz3DTrait.SKIN_DARK_BLUE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-ninja',
    title: 'Own a 3D with trait (Ninja)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_HERO_ARMOR,
    traitValues: [RugDollz3DTrait.NINJA],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-yoroi-mask',
    title: 'Own a 3D with trait (Yoroi Mask)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.POWER_UP_ITEM,
    traitValues: [RugDollz3DTrait.YOROI_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-samurai-sword',
    title: 'Own a 3D with trait (Samurai Sword)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.DOLLZ_WEAPON,
    traitValues: [RugDollz3DTrait.SAMURAI_SWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-elemental-lightning',
    title: 'Own a RugDollz with trait (Elemental Lightning)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.BACKGROUND,
    traitValues: [RugDollz3DTrait.ELEMENTAL_LIGHTNING],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-elemental-water',
    title: 'Own a RugDollz with trait (Elemental Water)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.BACKGROUND,
    traitValues: [RugDollz3DTrait.ELEMENTAL_WATER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-elemental-earth',
    title: 'Own a RugDollz with trait (Elemental Earth)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.BACKGROUND,
    traitValues: [RugDollz3DTrait.ELEMENTAL_EARTH],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-elemental-fire',
    title: 'Own a RugDollz with trait (Elemental Fire)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.BACKGROUND,
    traitValues: [RugDollz3DTrait.ELEMENTAL_FIRE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-chaos-gloves',
    title: 'Own a RugDollz with any trait (Chaos Gloves)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.CHAOS_GLOVES,
    traitValues: [
      RugDollz3DTrait.SKIN_RED,
      RugDollz3DTrait.SKIN_GREEN,
      RugDollz3DTrait.SKIN_BLUE,
      RugDollz3DTrait.SKIN_SILVER,
      RugDollz3DTrait.SKIN_PURPLE,
      RugDollz3DTrait.SKIN_WHITE,
      RugDollz3DTrait.SKIN_YELLOW,
      RugDollz3DTrait.SKIN_BROWN,
      RugDollz3DTrait.SKIN_ORANGE,
      RugDollz3DTrait.SKIN_BLACK
    ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-chaos-weapon-power',
    title: 'Own a RugDollz with Chaos Weapon Power trait (Activated)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.CHAOS_WEAPON_POWER,
    traitValues: [RugDollz3DTrait.CHAOS_ACTIVATED],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-legendary-earth-armor',
    title: 'Own a RugTroll with (Legendary Earth Armor)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.LEGENDARY_EARTH_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-dollz-breaker',
    title: 'Own a RugTroll with weapon trait (The DollzBreaker)',
    points: 200,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.DOLLZ_BREAKER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-legendary-lightning-armor',
    title: 'Own a RugTroll with (Legendary Lightning Armor)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.LEGENDARY_LIGHTNING_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-rugz-piercer',
    title: 'Own a RugTroll with weapon trait (The Rugz Piercer)',
    points: 200,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.RUGZ_PIERCER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-legendary-water-armor',
    title: 'Own a RugTroll with (Legendary Water Armor)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.LEGENDARY_WATER_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-rugz-infused-trident',
    title: 'Own a RugTroll with weapon trait (Rugz Infused Trident)',
    points: 200,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.RUGZ_INFUSED_TRIDENT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-legendary-fire-armor',
    title: 'Own a RugTroll with (Legendary Fire Armor)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.LEGENDARY_FIRE_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-attuned-rugsword',
    title: 'Own a RugTroll with weapon trait (Attuned RugSword)',
    points: 200,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.ATTUNED_RUGSWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-merchant-troll-armor',
    title: 'Own a RugTroll with (Merchant Troll Armor)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.MERCHANT_TROLL_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-rugz-chakram',
    title: 'Own a RugTroll with weapon trait (Rugz Chakram)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.RUGZ_CHAKRAM],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-cloaked-troll-armor',
    title: 'Own a RugTroll with (Cloaked Troll Armor)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.CLOAKED_TROLL_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-rugz-bane',
    title: 'Own a RugTroll with weapon trait (RugzBane)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.RUGZ_BANE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-bone-crusher',
    title: 'Own a RugTroll with (Bone Crusher)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.BONE_CRUSHER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-bone-killer',
    title: 'Own a RugTroll with weapon trait (Bone Killer)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.BONE_KILLER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-gladiator-troll-armor',
    title: 'Own a RugTroll with (Gladiator Troll Armor)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.GLADIATOR_TROLL_ARMOR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-rug-crasher',
    title: 'Own a RugTroll with weapon trait (The Rug Crasher)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.RUG_CRASHER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-death-troll-plate',
    title: 'Own a RugTroll with (Death Troll Plate)',
    points: 500,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.TROLLZ_ARMOR,
    traitValues: [RugDollz3DTrait.DEATH_TROLL_PLATE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-twilights-axe',
    title: 'Own a RugTroll with weapon trait (Twilight\'s Axe)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.WEAPONS,
    traitValues: [RugDollz3DTrait.TWILIGHTS_AXE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-trollz-soldier',
    title: 'Own a RugTroll with trait (Trollz Soldier)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SCARS,
    traitValues: [RugDollz3DTrait.TROLLZ_SOLDIER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-bloodsworn-troll',
    title: 'Own a RugTroll with trait (Bloodsworn Troll)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SCARS,
    traitValues: [RugDollz3DTrait.BLOODSWORN_TROLL],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-dollz-butcher',
    title: 'Own a RugTroll with trait (Dollz Butcher)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SCARS,
    traitValues: [RugDollz3DTrait.DOLLZ_BUTCHER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-war-chief',
    title: 'Own a RugTroll with trait (War Chief)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SCARS,
    traitValues: [RugDollz3DTrait.WAR_CHIEF],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-3d-unscarred',
    title: 'Own a RugTroll with trait (The Unscarred)',
    points: 100,
    collection: Collection.rugDollz3D,
    traitCategory: RugDollz3DTraitCategory.SCARS,
    traitValues: [RugDollz3DTrait.THE_UNSCARRED],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  }
];



