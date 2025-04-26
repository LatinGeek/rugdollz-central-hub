import { Badge, sampleBadges } from "../Entities/badge"
import { sampleUserBadgeRequirements, UserBadgeRequirement } from "./user-badge-requirement"

export interface BadgeDetails {
  badge: Badge
  userBadgeRequirements: UserBadgeRequirement[]
} 

export const sampleBadgeDetails: BadgeDetails[] = [
   {
    badge: sampleBadges[0],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[0].requirementsIds.includes(requirement.requirement.id)),
   },
   {
    badge: sampleBadges[1],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[1].requirementsIds.includes(requirement.requirement.id)),
   },
   {
    badge: sampleBadges[2],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[2].requirementsIds.includes(requirement.requirement.id)),
   },
   {
    badge: sampleBadges[3],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[3].requirementsIds.includes(requirement.requirement.id)),
   },
   {
    badge: sampleBadges[4],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[4].requirementsIds.includes(requirement.requirement.id)),
   }, 
   {
    badge: sampleBadges[5],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[5].requirementsIds.includes(requirement.requirement.id)),
   }, 
   {
    badge: sampleBadges[6],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[6].requirementsIds.includes(requirement.requirement.id)),
   }, 
   {
    badge: sampleBadges[7],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[7].requirementsIds.includes(requirement.requirement.id)),
   }, 
   {
    badge: sampleBadges[8],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[8].requirementsIds.includes(requirement.requirement.id)),
   },  
   {
    badge: sampleBadges[9],
    userBadgeRequirements: sampleUserBadgeRequirements.filter(requirement => sampleBadges[9].requirementsIds.includes(requirement.requirement.id)),
   },  
   
   
   
   
   
   
   
   
  ]