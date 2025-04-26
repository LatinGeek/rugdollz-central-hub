import { BadgeRequirement, sampleBadgeRequirements } from "../Entities/badge-requirement";

export interface UserBadgeRequirement {
  requirement: BadgeRequirement
  isCompleted: boolean
} 

export const sampleUserBadgeRequirements: UserBadgeRequirement[] = [
  { requirement: sampleBadgeRequirements[0], isCompleted: true },
  { requirement: sampleBadgeRequirements[1], isCompleted: false },
  { requirement: sampleBadgeRequirements[2], isCompleted: true },
  { requirement: sampleBadgeRequirements[3], isCompleted: false },
  { requirement: sampleBadgeRequirements[4], isCompleted: true },
  { requirement: sampleBadgeRequirements[5], isCompleted: false },
  { requirement: sampleBadgeRequirements[6], isCompleted: true },
  { requirement: sampleBadgeRequirements[7], isCompleted: false },
  { requirement: sampleBadgeRequirements[8], isCompleted: true },
  { requirement: sampleBadgeRequirements[9], isCompleted: false },
  { requirement: sampleBadgeRequirements[10], isCompleted: true },
  { requirement: sampleBadgeRequirements[11], isCompleted: false },
  { requirement: sampleBadgeRequirements[12], isCompleted: true },
  { requirement: sampleBadgeRequirements[13], isCompleted: false },
  { requirement: sampleBadgeRequirements[14], isCompleted: true },
  { requirement: sampleBadgeRequirements[15], isCompleted: true },
  { requirement: sampleBadgeRequirements[16], isCompleted: false },
  { requirement: sampleBadgeRequirements[17], isCompleted: true },
  { requirement: sampleBadgeRequirements[18], isCompleted: false },
  { requirement: sampleBadgeRequirements[19], isCompleted: true },
  { requirement: sampleBadgeRequirements[20], isCompleted: false },
  { requirement: sampleBadgeRequirements[21], isCompleted: true },
  { requirement: sampleBadgeRequirements[22], isCompleted: false },
  { requirement: sampleBadgeRequirements[23], isCompleted: true },
  { requirement: sampleBadgeRequirements[24], isCompleted: false },
  { requirement: sampleBadgeRequirements[25], isCompleted: true },
  { requirement: sampleBadgeRequirements[26], isCompleted: false },

] 

