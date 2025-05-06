import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection, unwrapFirestoreDoc } from '../db';
import { StoreItem } from '@/types/Entities/store-item';

export async function createStoreItem(storeItemData: Omit<StoreItem, 'id'>): Promise<StoreItem> {
  try {
    // First create the document to get the ID
    const docRef = await collections.storeItems.add({
      ...storeItemData,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    // Then update the document to include its own ID
    await docRef.update({
      id: docRef.id
    });
    
    const newStoreItem = await docRef.get();
    return unwrapFirestoreDoc({ id: newStoreItem.id, ...newStoreItem.data() } as FirestoreDoc<StoreItem>);
  } catch (error) {
    throw new Error(`Failed to create store item: ${error}`);
  }
}

export async function updateStoreItem(id: string, storeItemData: Partial<StoreItem>): Promise<StoreItem> {
  try {
    const docRef = collections.storeItems.doc(id);
    await docRef.update({
      ...storeItemData,
      updatedAt: new Date()
    });
    
    const updatedStoreItem = await docRef.get();
    return unwrapFirestoreDoc({ id: updatedStoreItem.id, ...updatedStoreItem.data() } as FirestoreDoc<StoreItem>);
  } catch (error) {
    throw new Error(`Failed to update store item: ${error}`);
  }
}

export async function deleteStoreItem(id: string): Promise<void> {
  try {
    await collections.storeItems.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete store item: ${error}`);
  }
}

export async function getStoreItemById(id: string): Promise<StoreItem | null> {
  try {
    const doc = await collections.storeItems.doc(id).get();
    if (!doc.exists) return null;
    return unwrapFirestoreDoc({ id: doc.id, ...doc.data() } as FirestoreDoc<StoreItem>);
  } catch (error) {
    throw new Error(`Failed to get store item: ${error}`);
  }
}

export async function listStoreItems(
  conditions?: QueryCondition<FirestoreDoc<StoreItem>>[],
  orderBy?: OrderByOption<FirestoreDoc<StoreItem>>,
  limit?: number
): Promise<StoreItem[]> {
  try {
    const items = await queryCollection(collections.storeItems, conditions, orderBy, limit);
    return items.map(item => unwrapFirestoreDoc(item));
  } catch (error) {
    throw new Error(`Failed to list store items: ${error}`);
  }
}

export async function getStoreItemsByCategory(category: string): Promise<StoreItem[]> {
  try {
    const items = await queryCollection<FirestoreDoc<StoreItem>>(
      collections.storeItems,
      [{ field: 'category', operator: '==', value: category }],
      { field: 'createdAt', direction: 'desc' }
    );
    return items.map(item => unwrapFirestoreDoc(item));
  } catch (error) {
    throw new Error(`Failed to get store items by category: ${error}`);
  }
}

export async function getActiveStoreItems(): Promise<StoreItem[]> {
  try {
    const items = await queryCollection<FirestoreDoc<StoreItem>>(
      collections.storeItems,
      [{ field: 'active', operator: '==', value: true }],
      { field: 'createdAt', direction: 'desc' }
    );
    return items.map(item => unwrapFirestoreDoc(item));
  } catch (error) {
    throw new Error(`Failed to get active store items: ${error}`);
  }
} 