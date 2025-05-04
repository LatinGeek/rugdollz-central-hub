import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { Collection } from '@/types/enums/collection';
import { RugDollzOGTraitCategory } from '@/types/enums/rugdollz-og-trait-category';
import { RugDollzOGTrait } from '@/types/enums/rugdollz-og-trait';
import { BadgeRequirementEarnCondition } from '@/types/enums/badge-requirement-earn-condition';

export const RugDollzOGbadgeRequirements: BadgeRequirement[] = [
  {
    id: 'own-og-token',
    title: 'Own one RugDollz OG token',
    points: 1000,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.LEGENDARY,
    traitValues: [RugDollzOGTrait.OG],
    earnCondition: BadgeRequirementEarnCondition.OWN_ONE_TOKEN
  },
  {
    id: 'own-og-legendary',
    title: 'Own one RugDollz OG with trait (legendary)',
    points: 1200,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.LEGENDARY,
    traitValues: [
      RugDollzOGTrait.ASH_RUGDOLL,
      RugDollzOGTrait.BATMAN,
      RugDollzOGTrait.EVIL_ROBOT,
      RugDollzOGTrait.GHOST_RAIDER,
      RugDollzOGTrait.HALLOWEEN,
      RugDollzOGTrait.JOKER,
      RugDollzOGTrait.KRATOS_RUGDOLL,
      RugDollzOGTrait.LINK,
      RugDollzOGTrait.MARIO_RUGDOLL,
      RugDollzOGTrait.NIGHT_KING,
      RugDollzOGTrait.OLD_SCHOOL,
      RugDollzOGTrait.RAINBOW,
      RugDollzOGTrait.RORSCHACH,
      RugDollzOGTrait.RUG,
      RugDollzOGTrait.SUPER_SAIYAN_RUGDOLL,
      RugDollzOGTrait.THE_PHAROAH,
      RugDollzOGTrait.THUG_LIFE,
      RugDollzOGTrait.TROLL,
      RugDollzOGTrait.VOODOO_PRIEST,
      RugDollzOGTrait.WOLVERINE_RUGDOLL,
      RugDollzOGTrait.SPIDER_MAN,
      RugDollzOGTrait.DARK_PANDA,
      RugDollzOGTrait.DARTH,
      RugDollzOGTrait.PEACE_MAKER,
      RugDollzOGTrait.SANTA_DOLL,
      RugDollzOGTrait.SNOOP_DAWG,
      RugDollzOGTrait.ZOMBIE_DOLL
    ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-galaxy',
    title: 'Own one RugDollz OG with trait (Galaxy12.5)',
    points: 900,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.BACKGROUND,
    traitValues: [RugDollzOGTrait.GALAXY],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-cloak',
    title: 'Own one OG with the trait (Cloak)',
    points: 900,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.CLOAK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-grim-reaper',
    title: 'Own one OG with the trait (Grim Reaper)',
    points: 900,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.GRIM_REAPER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-large-black-scythe',
    title: 'Own one OG with the trait (Large Black Scythe)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.LARGE_BLACK_SCYTHE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-bruce-lee',
    title: 'Own one OG with the trait (Bruce Lee)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.BRUCE_LEE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-nunchucks',
    title: 'Own one OG with the trait (Nunchucks)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.NUNCHUCKS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-batman-suit',
    title: 'Own one OG with the trait (Batman Suit)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.BATMAN_SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-batman-mask',
    title: 'Own one OG with the trait (Batman Mask)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.BATMAN_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-ninja-suit',
    title: 'Own one OG with the trait (Ninja Suit)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.NINJA_SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-samurai-sword',
    title: 'Own one OG with the trait (Samurai Sword with flames)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.FLAMING_SAMURAI_SWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-sai',
    title: 'Own one OG with the trait (sai as)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.SAI],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-shuriken',
    title: 'Own one OG with the trait (Shuriken Large)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.SHURIKEN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-superman-suit',
    title: 'Own one OG with the (Superman Suit) trait',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.SUPERMAN_SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-police-uniform',
    title: 'Own one OG with the trait (Police Uniform)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.POLICE_UNIFORM],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-gun',
    title: 'Own one OG with the trait (Gun)',
    points: 300,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.MACHINE_GUN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-magnum',
    title: 'Own one OG with the trait (Magnum)',
    points: 200,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.MAGNUM],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-jedi-suit',
    title: 'Own one OG with the trait (Jedi Suit)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.JEDI_SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-lightsaber',
    title: 'Own one OG with the trait (Lightsaber)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.LIGHTSABER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-kill-bill',
    title: 'Own one OG with the trait (Kill Bill outfit)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.KILL_BILL_OUTFIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-sub-zero',
    title: 'Own one OG with the trait (Sub Zero Outfit)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.SUB_ZERO_OUTFIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-zom-love',
    title: 'Own one OG with the trait (Zom love)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.ZOM_LOVE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-pilot-suit',
    title: 'Own one OG with the trait (Pilot Suit)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.PILOT_SUIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-pilot-mask',
    title: 'Own one OG with the trait (Pilot Mask)',
    points: 200,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.PILOT_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-scorpion',
    title: 'Own one OG with the trait (Scorpion outift)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.CLOTHES,
    traitValues: [RugDollzOGTrait.SCORPION_OUTFIT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-ghost-rider',
    title: 'Own one OG with the trait (Ghost rider)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.GHOST_RIDER_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-rorschach',
    title: 'Own one OG with the trait (Rorschach mask)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.RORSCHACH_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-evil-clown',
    title: 'Own one OG with the trait (Evil Clown mask)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.EVIL_CLOWN_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-jason-hockey',
    title: 'Own one OG with the trait (Jason Hockey Mask)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.JASON_HOCKEY_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-hannibal',
    title: 'Own one OG with the trait (Hannibal lector mask)',
    points: 300,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.HANNIBAL_LECTOR_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-full-beard',
    title: 'Own one OG with the trait (Full Beard)',
    points: 300,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.FULL_BEARD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-covid-mask',
    title: 'Own one OG with the trait (Covid mask) trait',
    points: 200,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.MASK,
    traitValues: [RugDollzOGTrait.GOLD_SURGICAL_MASK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-gladiator-helmet',
    title: 'Own one OG with the trait (Gladiator Centurion Helmet)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.HEADWEAR,
    traitValues: [RugDollzOGTrait.GLADIATOR_CENTURION_HELMET],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-spartan-spear',
    title: 'Own one OG with the trait (Spartan Spear)',
    points: 200,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.SPARTAN_SPEAR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-native-headdress',
    title: 'Own one OG with the trait (Native American Headdress)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.HEADWEAR,
    traitValues: [RugDollzOGTrait.NATIVE_AMERICAN_HEADDRESS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-pins-head',
    title: 'Own one OG with the trait (Pins Head)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.HEADWEAR,
    traitValues: [RugDollzOGTrait.PIN_HEAD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-alien-head',
    title: 'Own one OG with the trait (Alien Head)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.HEADWEAR,
    traitValues: [RugDollzOGTrait.ALIEN_HEAD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-crown',
    title: 'Own one OG with the trait (Crown)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.HEADWEAR,
    traitValues: [RugDollzOGTrait.CROWN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-buster-sword',
    title: 'Own one OG with the trait (Buster Sword Large)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.BUSTER_SWORD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-skatebo',
    title: 'Own one OG with the trait (Skatebo)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.SKATEBOARD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-thanos-glove',
    title: 'Own one OG with the trait (Thanos Glove)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.INFINITY_GAUNTLET],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-thor-hammer',
    title: 'Own one OG with the trait (Thor hammer)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.MJOLNIR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-chaos-gloves',
    title: 'Own one OG with the trait (Chaos Gloves)',
    points: 300,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.WEAPON,
    traitValues: [RugDollzOGTrait.CHAOS_GLOVES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-glowing-aura',
    title: 'Own one OG with the trait (Glowing Aura)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.SKIN,
    traitValues: [RugDollzOGTrait.GLOWING_AURA],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-gilded-gold',
    title: 'Own one OG with the trait (Gilded Gold)',
    points: 500,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.SKIN,
    traitValues: [RugDollzOGTrait.GILDED_GOLD],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-dark-matter',
    title: 'Own one OG with the trait (Dark Matter)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.SKIN,
    traitValues: [RugDollzOGTrait.DARK_MATTER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-stars',
    title: 'Own one OG with the trait (Stars)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.SKIN,
    traitValues: [RugDollzOGTrait.STARS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-smoke',
    title: 'Own one OG with the trait (Smoke)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.SKIN,
    traitValues: [RugDollzOGTrait.SMOKE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-electric',
    title: 'Own one OG with the trait (Electric)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.SKIN,
    traitValues: [RugDollzOGTrait.ELECTRIC],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-og-numbers',
    title: 'Own one OG with the trait (Numbers)',
    points: 400,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.SKIN,
    traitValues: [RugDollzOGTrait.NUMBERS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  }
];



