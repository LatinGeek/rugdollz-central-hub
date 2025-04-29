import { Purchase } from '@/types/Entities/purchase';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';

export async function createPurchase(purchaseData: Omit<Purchase, 'id'>): Promise<FirestoreDoc<Purchase>> {
  try {
    const docRef = await collections.purchases.add({
      ...purchaseData,
      purchaseDate: new Date(),
      updatedAt: new Date()
    });
    
    const newPurchase = await docRef.get();
    return { id: newPurchase.id, ...newPurchase.data() } as FirestoreDoc<Purchase>;
  } catch (error) {
    throw new Error(`Failed to create purchase: ${error}`);
  }
}

export async function updatePurchase(id: string, purchaseData: Partial<Purchase>): Promise<FirestoreDoc<Purchase>> {
  try {
    const docRef = collections.purchases.doc(id);
    await docRef.update({
      ...purchaseData,
      updatedAt: new Date()
    });
    
    const updatedPurchase = await docRef.get();
    return { id: updatedPurchase.id, ...updatedPurchase.data() } as FirestoreDoc<Purchase>;
  } catch (error) {
    throw new Error(`Failed to update purchase: ${error}`);
  }
}

export async function deletePurchase(id: string): Promise<void> {
  try {
    await collections.purchases.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete purchase: ${error}`);
  }
}

export async function getPurchaseById(id: string): Promise<FirestoreDoc<Purchase> | null> {
  try {
    const doc = await collections.purchases.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<Purchase>;
  } catch (error) {
    throw new Error(`Failed to get purchase: ${error}`);
  }
}

export async function listPurchases(
  conditions?: QueryCondition<FirestoreDoc<Purchase>>[],
  orderBy?: OrderByOption<FirestoreDoc<Purchase>>,
  limit?: number
): Promise<FirestoreDoc<Purchase>[]> {
  try {
    return await queryCollection(collections.purchases, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list purchases: ${error}`);
  }
}

export async function getUserPurchases(buyerId: string): Promise<FirestoreDoc<Purchase>[]> {
  try {
    return await queryCollection(
      collections.purchases,
      [{ field: 'buyerId', operator: '==', value: buyerId }],
      { field: 'purchaseDate', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get user purchases: ${error}`);
  }
}

export async function getRecentPurchases(limit: number = 10): Promise<FirestoreDoc<Purchase>[]> {
  try {
    return await queryCollection(
      collections.purchases,
      [],
      { field: 'purchaseDate', direction: 'desc' },
      limit
    );
  } catch (error) {
    throw new Error(`Failed to get recent purchases: ${error}`);
  }
}

export async function getPurchasesByStoreItem(itemId: string): Promise<FirestoreDoc<Purchase>[]> {
  try {
    return await queryCollection(
      collections.purchases,
      [{ field: 'itemId', operator: '==', value: itemId }],
      { field: 'purchaseDate', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get purchases by store item: ${error}`);
  }
} 