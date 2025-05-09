import { CompletedBadgeRequirement } from '@/types/Entities/completed-badge-requirement';
import { collections, QueryCondition, OrderByOption, queryCollection } from '../db';

export async function createCompletedBadgeRequirement(requirementData: Omit<CompletedBadgeRequirement, 'id'>): Promise<CompletedBadgeRequirement> {
  try {
    const docRef = await collections.completedBadgeRequirements.add({
      ...requirementData,
      createdAt: new Date()
    });
    const newRequirement = await docRef.get();
    return { id: newRequirement.id, ...newRequirement.data() } as CompletedBadgeRequirement;
  } catch (error) {
    throw new Error(`Failed to create completed badge requirement: ${error}`);
  }
}

export async function deleteCompletedBadgeRequirement(id: string): Promise<void> {
  try {
    await collections.completedBadgeRequirements.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete completed badge requirement: ${error}`);
  }
}

export async function getCompletedBadgeRequirementById(id: string): Promise<CompletedBadgeRequirement | null> {
  try {
    const doc = await collections.completedBadgeRequirements.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as CompletedBadgeRequirement;
  } catch (error) {
    throw new Error(`Failed to get completed badge requirement: ${error}`);
  }
}

export async function listCompletedBadgeRequirements(
  conditions?: QueryCondition<CompletedBadgeRequirement>[] ,
  orderBy?: OrderByOption<CompletedBadgeRequirement>,
  limit?: number
): Promise<CompletedBadgeRequirement[]> {
  try {
    return await queryCollection(collections.completedBadgeRequirements, conditions, orderBy, limit) as CompletedBadgeRequirement[];
  } catch (error) {
    throw new Error(`Failed to list completed badge requirements: ${error}`);
  }
}

export async function getUserCompletedBadgeRequirements(userId: string): Promise<CompletedBadgeRequirement[]> {
  try {
    return await queryCollection(
      collections.completedBadgeRequirements,
      [{ field: 'userId', operator: '==', value: userId }],
      { field: 'createdAt', direction: 'desc' }
    ) as CompletedBadgeRequirement[];
  } catch (error) {
    throw new Error(`Failed to get user completed badge requirements: ${error}`);
  }
}

export async function getRequirementCompletedBadgeRequirements(requirementId: string): Promise<CompletedBadgeRequirement[]> {
  try {
    return await queryCollection(
      collections.completedBadgeRequirements,
      [{ field: 'requirementId', operator: '==', value: requirementId }],
      { field: 'createdAt', direction: 'desc' }
    ) as CompletedBadgeRequirement[];
  } catch (error) {
    throw new Error(`Failed to get requirement completed badge requirements: ${error}`);
  }
}

export async function checkIfUserCompletedRequirement(userId: string, requirementId: string): Promise<boolean> {
  try {
    const docs = await queryCollection(
      collections.completedBadgeRequirements,
      [
        { field: 'userId', operator: '==', value: userId },
        { field: 'requirementId', operator: '==', value: requirementId }
      ]
    );
    return docs.length > 0;
  } catch (error) {
    throw new Error(`Failed to check if user completed requirement: ${error}`);
  }
} 