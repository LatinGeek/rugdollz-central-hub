import { StoreItem } from '@/types/Entities/store-item';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';

const unwrapFirestoreDoc = <T>(doc: FirestoreDoc<T>): T => {
  const { ...data } = doc;
  return data as T;
};

export async function createStoreItem(storeItemData: Omit<StoreItem, 'id'>): Promise<StoreItem> {
  try {
    const docRef = await collections.storeItems.add({
      ...storeItemData,
      createdAt: new Date(),
      updatedAt: new Date()
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
    const docs = await queryCollection<FirestoreDoc<StoreItem>>(collections.storeItems, conditions, orderBy, limit);
    return docs.map(doc => unwrapFirestoreDoc(doc));
  } catch (error) {
    throw new Error(`Failed to list store items: ${error}`);
  }
}

export async function getStoreItemsByCategory(category: string): Promise<StoreItem[]> {
  try {
    const docs = await queryCollection<FirestoreDoc<StoreItem>>(
      collections.storeItems,
      [{ field: 'category', operator: '==', value: category }],
      { field: 'createdAt', direction: 'desc' }
    );
    return docs.map(doc => unwrapFirestoreDoc(doc));
  } catch (error) {
    throw new Error(`Failed to get store items by category: ${error}`);
  }
}

export async function getFeaturedStoreItems(limit: number = 6): Promise<StoreItem[]> {
  try {
    const docs = await queryCollection<FirestoreDoc<StoreItem>>(
      collections.storeItems,
      [],
      { field: 'createdAt', direction: 'desc' },
      limit
    );
    return docs.map(doc => unwrapFirestoreDoc(doc));
  } catch (error) {
    throw new Error(`Failed to get featured store items: ${error}`);
  }
}

export async function searchStoreItems(searchTerm: string): Promise<StoreItem[]> {
  try {
    // Note: Firestore doesn't support full-text search directly
    // This is a simple implementation that searches in name and description
    const docs = await queryCollection<FirestoreDoc<StoreItem>>(collections.storeItems);
    const items = docs.map(doc => unwrapFirestoreDoc(doc));
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    throw new Error(`Failed to search store items: ${error}`);
  }
} 