import { Activity, sampleActivities } from "../Entities/activity";

import { sampleUserDetails, UserDetails } from "./user-details";

export interface ActivityDetails {
  activity: Activity,
  user: UserDetails
} 

export const sampleActivityDetails: ActivityDetails[] = [
 {activity: sampleActivities[0], user: sampleUserDetails[0]},
 {activity: sampleActivities[1], user: sampleUserDetails[0]},
 {activity: sampleActivities[2], user: sampleUserDetails[0]},
 {activity: sampleActivities[3], user: sampleUserDetails[0]},
];

