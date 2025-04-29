import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';

export async function createBadgeRequirement(requirementData: Omit<BadgeRequirement, 'id'>): Promise<FirestoreDoc<BadgeRequirement>> {
  try {
    const docRef = await collections.badgeRequirements.add(requirementData);
    
    const newRequirement = await docRef.get();
    return { id: newRequirement.id, ...newRequirement.data() } as FirestoreDoc<BadgeRequirement>;
  } catch (error) {
    throw new Error(`Failed to create badge requirement: ${error}`);
  }
}

export async function updateBadgeRequirement(id: string, requirementData: Partial<BadgeRequirement>): Promise<FirestoreDoc<BadgeRequirement>> {
  try {
    const docRef = collections.badgeRequirements.doc(id);
    await docRef.update(requirementData);
    
    const updatedRequirement = await docRef.get();
    return { id: updatedRequirement.id, ...updatedRequirement.data() } as FirestoreDoc<BadgeRequirement>;
  } catch (error) {
    throw new Error(`Failed to update badge requirement: ${error}`);
  }
}

export async function deleteBadgeRequirement(id: string): Promise<void> {
  try {
    await collections.badgeRequirements.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete badge requirement: ${error}`);
  }
}

export async function getBadgeRequirementById(id: string): Promise<FirestoreDoc<BadgeRequirement> | null> {
  try {
    const doc = await collections.badgeRequirements.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<BadgeRequirement>;
  } catch (error) {
    throw new Error(`Failed to get badge requirement: ${error}`);
  }
}

export async function listBadgeRequirements(
  conditions?: QueryCondition<FirestoreDoc<BadgeRequirement>>[],
  orderBy?: OrderByOption<FirestoreDoc<BadgeRequirement>>,
  limit?: number
): Promise<FirestoreDoc<BadgeRequirement>[]> {
  try {
    return await queryCollection(collections.badgeRequirements, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list badge requirements: ${error}`);
  }
}

export async function getBadgeRequirementsByPoints(points: number): Promise<FirestoreDoc<BadgeRequirement>[]> {
  try {
    return await queryCollection(
      collections.badgeRequirements,
      [{ field: 'points', operator: '==', value: points }],
      { field: 'title', direction: 'asc' }
    );
  } catch (error) {
    throw new Error(`Failed to get badge requirements by points: ${error}`);
  }
}

export async function getBadgeRequirementsByBadge(badgeId: string): Promise<FirestoreDoc<BadgeRequirement>[]> {
  try {
    const badge = await collections.badges.doc(badgeId).get();
    if (!badge.exists) return [];
    
    const requirementIds = badge.data()?.requirementsIds || [];
    const requirements = await Promise.all(
      requirementIds.map((id: string) => getBadgeRequirementById(id))
    );
    
    return requirements.filter((req): req is FirestoreDoc<BadgeRequirement> => req !== null);
  } catch (error) {
    throw new Error(`Failed to get badge requirements by badge: ${error}`);
  }
} 