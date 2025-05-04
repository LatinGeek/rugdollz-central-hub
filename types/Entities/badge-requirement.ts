import { Collection, CollectionType } from "../enums/collection";
import { RugDollzOGTraitCategory, RugDollzOGTraitCategoryType } from "../enums/rugdollz-og-trait-category";
import { RugDollzOGTrait, RugDollzOGTraitType } from "../enums/rugdollz-og-trait";
import { BadgeRequirementEarnCondition, BadgeRequirementEarnConditionType } from "../enums/badge-requirement-earn-condition";
import { RugDollzSocialTraitType } from "../enums/rugdollz-social-trait";
import { RugDollzSocialTraitCategoryType } from "../enums/rugdollz-social-trait-category";
import { RugDollz3DTraitCategoryType } from "../enums/rugdollz-3D-trait-category";
import { RugDollz3DTraitType } from "../enums/rugdollz-3D-trait";
import { DoruzuTraitType } from "../enums/doruzu-trait";
import { DoruzuTraitCategoryType } from "../enums/doruzu-trait-category";
import { GameNFTTraitCategoryType } from "../enums/game-nft-trait-category";
import { GameNFTTraitType } from "../enums/game-nft-trait";

export interface BadgeRequirement {
  id: string;
  title: string;
  points: number;
  collection: CollectionType;
  traitCategory: RugDollzOGTraitCategoryType | RugDollzSocialTraitCategoryType | RugDollz3DTraitCategoryType | DoruzuTraitCategoryType | GameNFTTraitCategoryType | null;
  traitValues: RugDollzOGTraitType[] | RugDollzSocialTraitType[] | RugDollz3DTraitType[] | DoruzuTraitType[] | GameNFTTraitType[];
  earnCondition: BadgeRequirementEarnConditionType;
}

export const sampleBadgeRequirements: BadgeRequirement[] = [
  { 
    id: "1", 
    title: "Own one RugDollz OG token", 
    points: 120,
    collection: Collection.rugDollzOG,
    traitCategory: null,
    traitValues: [],
    earnCondition: BadgeRequirementEarnCondition.OWN_ONE_TOKEN
  },
  { 
    id: "2", 
    title: "Own any Legendary trait", 
    points: 150,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.LEGENDARY,
    traitValues: [
      RugDollzOGTrait.ASH_RUGDOLL,
      RugDollzOGTrait.BATMAN,
      RugDollzOGTrait.EVIL_ROBOT
    ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ANY_TRAIT
  },
  { 
    id: "3", 
    title: "Own all Legendary traits", 
    points: 1000,
    collection: Collection.rugDollzOG,
    traitCategory: RugDollzOGTraitCategory.LEGENDARY,
    traitValues: [
      RugDollzOGTrait.ASH_RUGDOLL,
      RugDollzOGTrait.BATMAN,
      RugDollzOGTrait.EVIL_ROBOT
    ],
    earnCondition: BadgeRequirementEarnCondition.OWN_ALL_TRAITS
  }
];
