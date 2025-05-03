import { Badge } from '@/types/Entities/badge';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { BadgeDetails } from '@/types/FormattedData/badge-details';
import { UserBadgeRequirement } from '@/types/FormattedData/user-badge-requirement';
import { CompletedBadgeRequirement } from '@/types/Entities/completed-badge-requirement';
import { getUserCompletedBadgeRequirements } from './completed-badge-requirements';
import { BadgeRequirement } from '@/types/Entities/badge-requirement';

export async function createBadge(badgeData: Omit<Badge, 'id'>): Promise<FirestoreDoc<Badge>> {
  try {
    const docRef = await collections.badges.add({
      ...badgeData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    const newBadge = await docRef.get();
    return { id: newBadge.id, ...newBadge.data() } as FirestoreDoc<Badge>;
  } catch (error) {
    throw new Error(`Failed to create badge: ${error}`);
  }
}

export async function updateBadge(id: string, badgeData: Partial<Badge>): Promise<FirestoreDoc<Badge>> {
  try {
    const docRef = collections.badges.doc(id);
    await docRef.update({
      ...badgeData,
      updatedAt: new Date()
    });
    
    const updatedBadge = await docRef.get();
    return { id: updatedBadge.id, ...updatedBadge.data() } as FirestoreDoc<Badge>;
  } catch (error) {
    throw new Error(`Failed to update badge: ${error}`);
  }
}

export async function deleteBadge(id: string): Promise<void> {
  try {
    await collections.badges.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete badge: ${error}`);
  }
}

export async function getBadgeById(id: string): Promise<FirestoreDoc<Badge> | null> {
  try {
    const doc = await collections.badges.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<Badge>;
  } catch (error) {
    throw new Error(`Failed to get badge: ${error}`);
  }
}

export async function listBadges(
  conditions?: QueryCondition<FirestoreDoc<Badge>>[],
  orderBy?: OrderByOption<FirestoreDoc<Badge>>,
  limit?: number
): Promise<FirestoreDoc<Badge>[]> {
  try {
    return await queryCollection(collections.badges, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list badges: ${error}`);
  }
}

export async function getActiveBadges(): Promise<FirestoreDoc<Badge>[]> {
  try {
    return await queryCollection(
      collections.badges,
      [{ field: 'isActive', operator: '==', value: true }]
    );
  } catch (error) {
    throw new Error(`Failed to get active badges: ${error}`);
  }
}

export async function getUserBadgeDetails(userId: string): Promise<BadgeDetails[]> {
  // Fetch all badges
  const badgeSnapshot = await collections.badges.get();
  const badges: Badge[] = badgeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Badge);

  // Fetch all badge requirements
  const badgeReqSnapshot = await collections.badgeRequirements.get();
  const allBadgeRequirements: BadgeRequirement[] = badgeReqSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as BadgeRequirement);

  // Fetch user's completed badge requirements
  const completedRequirements: CompletedBadgeRequirement[] = await getUserCompletedBadgeRequirements(userId);

  // Map completed requirements to UserBadgeRequirement, only if BadgeRequirement exists
  const userBadgeRequirements: UserBadgeRequirement[] = completedRequirements
    .map(completed => {
      const requirement = allBadgeRequirements.find(r => r.id === completed.requirementId);
      if (!requirement) return null;
      // Merge BadgeRequirement and CompletedBadgeRequirement
      const mergedRequirement = { ...requirement, ...completed };
      return {
        requirement: mergedRequirement as BadgeRequirement,
        isCompleted: true
      };
    })
    .filter((ubr): ubr is UserBadgeRequirement => ubr !== null);

  // Build BadgeDetails for each badge
  const badgeDetails: BadgeDetails[] = badges.map(badge => {
    const requirementsForBadge = userBadgeRequirements.filter(ubr => badge.requirementsIds.includes(ubr.requirement.id));
    return {
      badge,
      userBadgeRequirements: requirementsForBadge,
    };
  });

  return badgeDetails;
} 