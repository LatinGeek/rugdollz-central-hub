import { LoreEntry } from '@/types/Entities/lore-entry';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { FieldValue } from 'firebase-admin/firestore';

export async function createLoreEntry(entryData: Omit<LoreEntry, 'id'>): Promise<FirestoreDoc<LoreEntry>> {
  try {
    const docRef = await collections.loreEntries.add({
      ...entryData,
      createdAt: new Date(),
      updatedAt: new Date(),
      votes: 0
    });
    
    const newEntry = await docRef.get();
    return { id: newEntry.id, ...newEntry.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to create lore entry: ${error}`);
  }
}

export async function updateLoreEntry(id: string, entryData: Partial<LoreEntry>): Promise<FirestoreDoc<LoreEntry>> {
  try {
    const docRef = collections.loreEntries.doc(id);
    await docRef.update({
      ...entryData,
      updatedAt: new Date()
    });
    
    const updatedEntry = await docRef.get();
    return { id: updatedEntry.id, ...updatedEntry.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to update lore entry: ${error}`);
  }
}

export async function deleteLoreEntry(id: string): Promise<void> {
  try {
    await collections.loreEntries.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete lore entry: ${error}`);
  }
}

export async function getLoreEntryById(id: string): Promise<FirestoreDoc<LoreEntry> | null> {
  try {
    const doc = await collections.loreEntries.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to get lore entry: ${error}`);
  }
}

export async function listLoreEntries(
  conditions?: QueryCondition<FirestoreDoc<LoreEntry>>[],
  orderBy?: OrderByOption<FirestoreDoc<LoreEntry>>,
  limit?: number
): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(collections.loreEntries, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list lore entries: ${error}`);
  }
}

export async function getLoreEntriesByNFT(nftId: string): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [{ field: 'nftId', operator: '==', value: nftId }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get lore entries for NFT: ${error}`);
  }
}

export async function getLoreEntriesByAuthor(authorId: string): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [{ field: 'authorId', operator: '==', value: authorId }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get lore entries by author: ${error}`);
  }
}

export async function getPopularLoreEntries(limit: number = 10): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [],
      { field: 'votes', direction: 'desc' },
      limit
    );
  } catch (error) {
    throw new Error(`Failed to get popular lore entries: ${error}`);
  }
}

export async function updateLoreEntryVotes(id: string, voteChange: number): Promise<FirestoreDoc<LoreEntry>> {
  try {
    const docRef = collections.loreEntries.doc(id);
    await docRef.update({
      votes: FieldValue.increment(voteChange),
      updatedAt: new Date()
    });
    
    const updatedEntry = await docRef.get();
    return { id: updatedEntry.id, ...updatedEntry.data() } as FirestoreDoc<LoreEntry>;
  } catch (error) {
    throw new Error(`Failed to update lore entry votes: ${error}`);
  }
}

export async function getLoreEntriesByStatus(status: string): Promise<FirestoreDoc<LoreEntry>[]> {
  try {
    return await queryCollection(
      collections.loreEntries,
      [{ field: 'status', operator: '==', value: status }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get lore entries by status: ${error}`);
  }
} 