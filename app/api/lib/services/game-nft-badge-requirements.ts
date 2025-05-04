import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { Collection } from '@/types/enums/collection';
import { BadgeRequirementEarnCondition } from '@/types/enums/badge-requirement-earn-condition';
import { GameNFTTraitCategory } from '@/types/enums/game-nft-trait-category';
import { GameNFTTrait } from '@/types/enums/game-nft-trait';

export const GameNFTBadgeRequirements: BadgeRequirement[] = [
  // Style requirements
  {
    id: 'own-celestial-kart',
    title: 'Own one Celestial Kart NFT',
    points: 1000,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.legendary],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-rlbz-racer',
    title: 'Own one RLBZ Racer NFT',
    points: 900,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.prestige],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-phantom-kart',
    title: 'Own one Phantom Kart NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.stealth],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-speedster-kart',
    title: 'Own one Speedster Kart NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.highSpeed],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-classic-kart',
    title: 'Own one Classic Kart NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.retro],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-tanker-kart',
    title: 'Own one Tanker Kart NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.heavyDuty],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-nitro-beast-kart',
    title: 'Own one Nitro Beast Kart NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.muscle],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-turbo-rocket-kart',
    title: 'Own one Turbo Rocket Kart NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.style,
    traitValues: [GameNFTTrait.futuristic],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },

  // Race requirements
  {
    id: 'own-celestial-rugling',
    title: 'Own Celestial RugLing',
    points: 1000,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.celestial],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-pinkling',
    title: 'Own one Pinkling NFT',
    points: 900,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.pinkling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-monkling',
    title: 'Own one Monkling NFT',
    points: 900,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.monkling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-necroling',
    title: 'Own one Necroling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.necroling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-mesmerling',
    title: 'Own one Mesmerling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.mesmerling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-knightling',
    title: 'Own one Knightling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.knightling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-engineerling',
    title: 'Own one Engineerling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.engineerling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-ninjaling',
    title: 'Own one Ninjaling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.ninjaling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-wizardling',
    title: 'Own one Wizardling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.wizardling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-rangerling',
    title: 'Own one Rangerling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.rangerling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-warriorling',
    title: 'Own one Warriorling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.warriorling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-waterling',
    title: 'Own one Waterling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.waterling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-lightling',
    title: 'Own one Lightling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.lightling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-earthling',
    title: 'Own one Earthling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.earthling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-fireling',
    title: 'Own one Fireling NFT',
    points: 800,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.race,
    traitValues: [GameNFTTrait.fireling],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },

  // Spell Type requirements
  {
    id: 'own-earth-tome',
    title: 'Own one Earth Tome NFT',
    points: 600,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.spellType,
    traitValues: [GameNFTTrait.earth],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-forbidden-tome',
    title: 'Own one Forbidden Tome NFT',
    points: 600,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.spellType,
    traitValues: [GameNFTTrait.dark],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  {
    id: 'own-fire-tome',
    title: 'Own one Fire Tome NFT',
    points: 600,
    collection: Collection.gameNFTs,
    traitCategory: GameNFTTraitCategory.spellType,
    traitValues: [GameNFTTrait.fire],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  }
];



