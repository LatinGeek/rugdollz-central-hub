import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { Collection } from '@/types/enums/collection';
import { RugDollzSocialTraitCategory } from '@/types/enums/rugdollz-social-trait-category';
import { RugDollzSocialTrait } from '@/types/enums/rugdollz-social-trait';
import { BadgeRequirementEarnCondition } from '@/types/enums/badge-requirement-earn-condition';

export const RugDollzSocialBadgeRequirements: BadgeRequirement[] = [
  {
    id: 'own-social-token',
    title: 'Own one RugDollz Social token',
    points: 1000,
    collection: Collection.rugDollzSocial,
    traitCategory: null,
    traitValues: [],
    earnCondition: BadgeRequirementEarnCondition.OWN_ONE_TOKEN
  },
  {
    id: 'own-social-gaming-controller',
    title: 'Own a RugDollz Social with Hand Items trait (Gaming Controller)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.GAMING_CONTROLLER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-plane',
    title: 'Own a RugDollz Social with Hand Items trait (Plane)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.PLANE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-frying-pan',
    title: 'Own a RugDollz Social with Hand Items trait (Food Frying Pan)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.FOOD_FRYING_PAN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-dumbel',
    title: 'Own a RugDollz Social with Hand Items trait (Dumbel)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.DUMBEL],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-guitar',
    title: 'Own a RugDollz Social with Hand Items trait (Music Guitar)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.MUSIC_GUITAR],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-spanner',
    title: 'Own a RugDollz Social with Hand Items trait (Motoring Spanner)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.MOTORING_SPANNER],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-briefcase',
    title: 'Own a RugDollz Social with Hand Items trait (Finance Briefcase)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.FINANCE_BRIEFCASE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-art-easel',
    title: 'Own a RugDollz Social with Hand Items trait (Creative arts Art easel)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.CREATIVE_ARTS_ART_EASEL],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-trophy',
    title: 'Own a RugDollz Social with Hand Items trait (Sport Trophy)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.SPORT_TROPHY],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-popcorn',
    title: 'Own a RugDollz Social with Hand Items trait (Socialize Popcorn)',
    points: 600,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [RugDollzSocialTrait.SOCIALIZE_POPCORN],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-beanie',
    title: 'Own a RugDollz Social with Hats trait (Beanie)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HATS,
    traitValues: [RugDollzSocialTrait.BEANIE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-cap',
    title: 'Own a RugDollz Social with Hats trait (Cap)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HATS,
    traitValues: [RugDollzSocialTrait.CAP],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-cap-back',
    title: 'Own a RugDollz Social with Hats trait (Cap Back)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HATS,
    traitValues: [RugDollzSocialTrait.CAP_BACK],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-bowl-hat',
    title: 'Own a RugDollz Social with Hats trait (Bowl bucket hat)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HATS,
    traitValues: [RugDollzSocialTrait.BOWL_BUCKET_HAT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-tophat',
    title: 'Own a RugDollz Social with Hats trait (Tophat)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HATS,
    traitValues: [RugDollzSocialTrait.TOPHAT],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-red-coat',
    title: 'Own a RugDollz Social with Hoodie trait (RugDollz Coat Red with black logo)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HOODIE,
    traitValues: [RugDollzSocialTrait.RUGDOLLZ_COAT_RED],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-hoodie',
    title: 'Own a RugDollz Social with Hoodie trait (Hoodie with)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HOODIE,
    traitValues: [RugDollzSocialTrait.HOODIE_WITH],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-blue-coat',
    title: 'Own a RugDollz Social with Hoodie trait (RugLabz Coat Blue with small logo)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HOODIE,
    traitValues: [RugDollzSocialTrait.RUGLABZ_COAT_BLUE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-gold-hoodie',
    title: 'Own a RugDollz Social with Hoodie trait (Gold RugLabz Hoodie with black logo)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HOODIE,
    traitValues: [RugDollzSocialTrait.GOLD_RUGLABZ_HOODIE],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-black-hoodie',
    title: 'Own a RugDollz Social with Hoodie trait (Black Hoodie with RDZ front)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HOODIE,
    traitValues: [RugDollzSocialTrait.BLACK_HOODIE_RDZ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-rave-glasses',
    title: 'Own a RugDollz Social with Glasses trait (RAVE Glasses)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.GLASSES,
    traitValues: [RugDollzSocialTrait.RAVE_GLASSES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-glasses',
    title: 'Own a RugDollz Social with Glasses trait (Glasses)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.GLASSES,
    traitValues: [RugDollzSocialTrait.GLASSES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-black-sunglasses',
    title: 'Own a RugDollz Social with Glasses trait (Black Sunglasses)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.GLASSES,
    traitValues: [RugDollzSocialTrait.BLACK_SUNGLASSES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-aviators',
    title: 'Own a RugDollz Social with Glasses trait (Aviators)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.GLASSES,
    traitValues: [RugDollzSocialTrait.AVIATORS],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-logo-glasses',
    title: 'Own a RugDollz Social with Glasses trait (RugDollz logo Glasses)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.GLASSES,
    traitValues: [RugDollzSocialTrait.RUGDOLLZ_LOGO_GLASSES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-rdz-g',
    title: 'Own a RugDollz Social with Glasses trait (RDZ G)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.GLASSES,
    traitValues: [RugDollzSocialTrait.RDZ_G],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-dark-eyes',
    title: 'Own a RugDollz Social with Eyes trait (Dark eyes)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.EYES,
    traitValues: [RugDollzSocialTrait.DARK_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-bitcoin-eyes',
    title: 'Own a RugDollz Social with Eyes trait (Bitcoin eyes)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.EYES,
    traitValues: [RugDollzSocialTrait.BITCOIN_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-red-eyes',
    title: 'Own a RugDollz Social with Eyes trait (Red eyes)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.EYES,
    traitValues: [RugDollzSocialTrait.RED_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-cyber-eyes',
    title: 'Own a RugDollz Social with Eyes trait (Cyber eyes)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.EYES,
    traitValues: [RugDollzSocialTrait.CYBER_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-social-ethereum-eyes',
    title: 'Own a RugDollz Social with Eyes trait (Ethereum eyes)',
    points: 300,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.EYES,
    traitValues: [RugDollzSocialTrait.ETHEREUM_EYES],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-all-social-hand-items',
    title: 'Own all Social Hand Traits',
    points: 2000,
    collection: Collection.rugDollzSocial,
    traitCategory: RugDollzSocialTraitCategory.HAND_ITEMS,
    traitValues: [
      RugDollzSocialTrait.GAMING_CONTROLLER,
      RugDollzSocialTrait.PLANE,
      RugDollzSocialTrait.FOOD_FRYING_PAN,
      RugDollzSocialTrait.DUMBEL,
      RugDollzSocialTrait.MUSIC_GUITAR,
      RugDollzSocialTrait.MOTORING_SPANNER,
      RugDollzSocialTrait.FINANCE_BRIEFCASE,
      RugDollzSocialTrait.CREATIVE_ARTS_ART_EASEL,
      RugDollzSocialTrait.SPORT_TROPHY,
      RugDollzSocialTrait.SOCIALIZE_POPCORN
    ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ALL_TRAITS
  }
];



