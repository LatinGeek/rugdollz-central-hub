import { Activity } from '@/types/Entities/activity';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection, unwrapFirestoreDoc } from '../db';
import { ActivityNameType } from '@/types/enums/activity-name';
import { ActivityActionType } from '@/types/enums/activity-action';

export async function createActivity(activityData: Omit<Activity, 'id'>): Promise<Activity> {
  try {
    // First create the document to get the ID
    const docRef = await collections.activities.add({
      ...activityData,
      createdAt: new Date()
    });

    // Then update the document to include its own ID
    await docRef.update({
      id: docRef.id
    });
    
    const newActivity = await docRef.get();
    return unwrapFirestoreDoc({ id: newActivity.id, ...newActivity.data() } as FirestoreDoc<Activity>);
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

export async function getActivityById(id: string): Promise<Activity | null> {
  try {
    const doc = await collections.activities.doc(id).get();
    if (!doc.exists) return null;
    return unwrapFirestoreDoc({ id: doc.id, ...doc.data() } as FirestoreDoc<Activity>);
  } catch (error) {
    throw new Error(`Failed to get activity: ${error}`);
  }
}

export async function listActivities(
  conditions?: QueryCondition<FirestoreDoc<Activity>>[],
  orderBy?: OrderByOption<FirestoreDoc<Activity>>,
  limit?: number
): Promise<Activity[]> {
  try {
    const activities = await queryCollection(collections.activities, conditions, orderBy, limit);
    return activities.map(activity => unwrapFirestoreDoc(activity));
  } catch (error) {
    throw new Error(`Failed to list activities: ${error}`);
  }
}

export async function getUserActivities(userId: string): Promise<Activity[]> {
  try {
    const activities = await queryCollection<FirestoreDoc<Activity>>(
      collections.activities,
      [{ field: 'userId', operator: '==', value: userId }],
      { field: 'createdAt', direction: 'desc' }
    );
    return activities.map(activity => unwrapFirestoreDoc(activity));
  } catch (error) {
    throw new Error(`Failed to get user activities: ${error}`);
  }
}

export async function getActivitiesByType(type: ActivityNameType): Promise<Activity[]> {
  try {
    const activities = await queryCollection<FirestoreDoc<Activity>>(
      collections.activities,
      [{ field: 'type', operator: '==', value: type }],
      { field: 'createdAt', direction: 'desc' }
    );
    return activities.map(activity => unwrapFirestoreDoc(activity));
  } catch (error) {
    throw new Error(`Failed to get activities by type: ${error}`);
  }
}

export async function getActivitiesByAction(action: ActivityActionType): Promise<Activity[]> {
  try {
    const activities = await queryCollection<FirestoreDoc<Activity>>(
      collections.activities,
      [{ field: 'action', operator: '==', value: action }],
      { field: 'createdAt', direction: 'desc' }
    );
    return activities.map(activity => unwrapFirestoreDoc(activity));
  } catch (error) {
    throw new Error(`Failed to get activities by action: ${error}`);
  }
}

export async function getRecentActivities(limit: number = 10): Promise<Activity[]> {
  try {
    const activities = await queryCollection<FirestoreDoc<Activity>>(
      collections.activities,
      [],
      { field: 'createdAt', direction: 'desc' },
      limit
    );
    return activities.map(activity => unwrapFirestoreDoc(activity));
  } catch (error) {
    throw new Error(`Failed to get recent activities: ${error}`);
  }
}

export async function getActivitiesByDateRange(startDate: Date, endDate: Date): Promise<Activity[]> {
  try {
    const activities = await queryCollection<FirestoreDoc<Activity>>(
      collections.activities,
      [
        { field: 'createdAt', operator: '>=', value: startDate },
        { field: 'createdAt', operator: '<=', value: endDate }
      ],
      { field: 'createdAt', direction: 'desc' }
    );
    return activities.map(activity => unwrapFirestoreDoc(activity));
  } catch (error) {
    throw new Error(`Failed to get activities by date range: ${error}`);
  }
}

export interface ActivityFilterOptions {
  userId?: string;
  type?: ActivityNameType;
  action?: ActivityActionType;
  nftId?: string;
  raffleId?: string;
  loreEntryId?: string;
}

export async function getFilteredActivities(
  filters: ActivityFilterOptions,
  limit?: number
): Promise<Activity[]> {
  try {
    const conditions: QueryCondition<FirestoreDoc<Activity>>[] = [];

    // Add conditions based on provided filters
    if (filters.userId) {
      conditions.push({ field: 'userId', operator: '==', value: filters.userId });
    }
    if (filters.type) {
      conditions.push({ field: 'type', operator: '==', value: filters.type });
    }
    if (filters.action) {
      conditions.push({ field: 'action', operator: '==', value: filters.action });
    }
    if (filters.nftId) {
      conditions.push({ field: 'nftId', operator: '==', value: filters.nftId });
    }
    if (filters.raffleId) {
      conditions.push({ field: 'raffleId', operator: '==', value: filters.raffleId });
    }
    if (filters.loreEntryId) {
      conditions.push({ field: 'loreEntryId', operator: '==', value: filters.loreEntryId });
    }

    // Always sort by createdAt in descending order (most recent first)
    const orderBy: OrderByOption<FirestoreDoc<Activity>> = {
      field: 'createdAt',
      direction: 'desc'
    };

    const activities = await queryCollection(
      collections.activities,
      conditions,
      orderBy,
      limit
    );
    return activities.map(activity => unwrapFirestoreDoc(activity));
  } catch (error) {
    throw new Error(`Failed to get filtered activities: ${error}`);
  }
} 