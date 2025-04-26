
export interface CompletedBadgeRequirement {
  id: string,
  requirementId: string
  userId: string
  createdAt: Date
} 

export const sampleCompletedBadgeRequirements: CompletedBadgeRequirement[] = [
  { id: "1", requirementId: "1", userId: "1", createdAt: new Date() },
  { id: "2", requirementId: "2", userId: "2", createdAt: new Date() },
  { id: "3", requirementId: "3", userId: "3", createdAt: new Date() },
  { id: "4", requirementId: "4", userId: "1", createdAt: new Date() },
  { id: "5", requirementId: "5", userId: "2", createdAt: new Date() },
  { id: "6", requirementId: "6", userId: "3", createdAt: new Date() },
  { id: "7", requirementId: "7", userId: "1", createdAt: new Date() },
  { id: "8", requirementId: "8", userId: "2", createdAt: new Date() },
  { id: "9", requirementId: "9", userId: "3", createdAt: new Date() },
  { id: "10", requirementId: "10", userId: "1", createdAt: new Date() },
  { id: "11", requirementId: "11", userId: "2", createdAt: new Date() },
  { id: "12", requirementId: "12", userId: "3", createdAt: new Date() },
  { id: "13", requirementId: "13", userId: "1", createdAt: new Date() },
  { id: "14", requirementId: "14", userId: "2", createdAt: new Date() },
  { id: "15", requirementId: "15", userId: "3", createdAt: new Date() },
  { id: "16", requirementId: "1", userId: "2", createdAt: new Date() },
  { id: "17", requirementId: "2", userId: "3", createdAt: new Date() },
  { id: "18", requirementId: "3", userId: "1", createdAt: new Date() },
  { id: "19", requirementId: "4", userId: "2", createdAt: new Date() },
  { id: "20", requirementId: "5", userId: "3", createdAt: new Date() },
  { id: "21", requirementId: "6", userId: "1", createdAt: new Date() },
  { id: "22", requirementId: "7", userId: "2", createdAt: new Date() },
  { id: "23", requirementId: "8", userId: "3", createdAt: new Date() }
];
