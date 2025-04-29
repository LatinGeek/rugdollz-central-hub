import { Activity } from '@/types/Entities/activity';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { ActivityNameType } from '@/types/enums/activity-name';
import { ActivityActionType } from '@/types/enums/activity-action';

export async function createActivity(activityData: Omit<Activity, 'id'>): Promise<FirestoreDoc<Activity>> {
  try {
    const docRef = await collections.activities.add({
      ...activityData,
      createdAt: new Date()
    });
    
    const newActivity = await docRef.get();
    return { id: newActivity.id, ...newActivity.data() } as FirestoreDoc<Activity>;
  } catch (error) {
    throw new Error(`Failed to create activity: ${error}`);
  }
}

export async function deleteActivity(id: string): Promise<void> {
  try {
    await collections.activities.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete activity: ${error}`);
  }
}

export async function getActivityById(id: string): Promise<FirestoreDoc<Activity> | null> {
  try {
    const doc = await collections.activities.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<Activity>;
  } catch (error) {
    throw new Error(`Failed to get activity: ${error}`);
  }
}

export async function listActivities(
  conditions?: QueryCondition<FirestoreDoc<Activity>>[],
  orderBy?: OrderByOption<FirestoreDoc<Activity>>,
  limit?: number
): Promise<FirestoreDoc<Activity>[]> {
  try {
    return await queryCollection(collections.activities, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list activities: ${error}`);
  }
}

export async function getUserActivities(userId: string): Promise<FirestoreDoc<Activity>[]> {
  try {
    return await queryCollection(
      collections.activities,
      [{ field: 'userId', operator: '==', value: userId }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get user activities: ${error}`);
  }
}

export async function getActivitiesByType(type: ActivityNameType): Promise<FirestoreDoc<Activity>[]> {
  try {
    return await queryCollection(
      collections.activities,
      [{ field: 'type', operator: '==', value: type }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get activities by type: ${error}`);
  }
}

export async function getActivitiesByAction(action: ActivityActionType): Promise<FirestoreDoc<Activity>[]> {
  try {
    return await queryCollection(
      collections.activities,
      [{ field: 'action', operator: '==', value: action }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get activities by action: ${error}`);
  }
}

export async function getRecentActivities(limit: number = 10): Promise<FirestoreDoc<Activity>[]> {
  try {
    return await queryCollection(
      collections.activities,
      [],
      { field: 'createdAt', direction: 'desc' },
      limit
    );
  } catch (error) {
    throw new Error(`Failed to get recent activities: ${error}`);
  }
}

export async function getActivitiesByDateRange(startDate: Date, endDate: Date): Promise<FirestoreDoc<Activity>[]> {
  try {
    return await queryCollection(
      collections.activities,
      [
        { field: 'createdAt', operator: '>=', value: startDate },
        { field: 'createdAt', operator: '<=', value: endDate }
      ],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get activities by date range: ${error}`);
  }
} 