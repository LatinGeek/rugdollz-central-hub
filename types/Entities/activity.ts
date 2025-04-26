import { ActivityAction, ActivityActionType } from "../enums/activity-action"
import { ActivityName, ActivityNameType } from "../enums/activity-name"

export interface Activity {
  id: string
  type: ActivityNameType
  action: ActivityActionType
  userId: string
  createdAt: Date
} 

export const sampleActivities: Activity[] = [
  { id: "1", type: ActivityName.nft, action: ActivityAction.newNFT, userId: 'User123', createdAt: new Date()},
  { id: "2", type: ActivityName.raffle, action: ActivityAction.raffleCreated, userId: 'Admin', createdAt: new Date()},
  { id: "3", type: ActivityName.lore, action: ActivityAction.loreEntryCreated, userId: 'Writer456', createdAt: new Date()},
  { id: "4", type: ActivityName.user, action: ActivityAction.userRegistered, userId: 'NewUser789', createdAt: new Date()}
];

