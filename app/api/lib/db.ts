import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, WhereFilterOp } from 'firebase-admin/firestore';
import { User } from '@/types/Entities/user';
import { Purchase } from '@/types/Entities/purchase';
import { StoreItem } from '@/types/Entities/store-item';
import { Raffle } from '@/types/Entities/raffle';
import { NFTLayerOption } from '@/types/Entities/nft-layer-option';
import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { Badge } from '@/types/Entities/badge';
import { NFTLayerCategory } from '@/types/Entities/nft-layer-category';
import { CompletedBadgeRequirement } from '@/types/Entities/completed-badge-requirement';
import { LoreEntry } from '@/types/Entities/lore-entry';
import { Activity } from '@/types/Entities/activity';
import { Note } from '@/types/Entities/note';
import { NFT } from '@/types/Entities/nft';

// Initialize Firebase Admin
const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY 
        ? process.env.FIREBASE_PRIVATE_KEY.includes('\\n')
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
          : process.env.FIREBASE_PRIVATE_KEY
        : undefined,    }),
  });
}

// Get Firestore instance
export const db = getFirestore();

// Types
export type FirestoreDate = Timestamp;
export type WithoutId<T> = Omit<T, 'id'>;
export type FirestoreDoc<T> = WithoutId<T> & { id?: string };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type FirestoreCollection<T> = ReturnType<typeof db.collection>;

// Query types
export interface QueryCondition<T> {
  field: keyof T;
  operator: WhereFilterOp;
  value: T[keyof T] | null;
}

export interface OrderByOption<T> {
  field: keyof T;
  direction: 'asc' | 'desc';
}

// Collection references with their respective types
export const collections = {
  users: db.collection('users') as FirestoreCollection<FirestoreDoc<User>>,
  purchases: db.collection('purchases') as FirestoreCollection<FirestoreDoc<Purchase>>,
  storeItems: db.collection('storeItems') as FirestoreCollection<FirestoreDoc<StoreItem>>,
  raffles: db.collection('raffles') as FirestoreCollection<FirestoreDoc<Raffle>>,
  nftLayerOptions: db.collection('nftLayerOptions') as FirestoreCollection<FirestoreDoc<NFTLayerOption>>,
  badgeRequirements: db.collection('badgeRequirements') as FirestoreCollection<FirestoreDoc<BadgeRequirement>>,
  badges: db.collection('badges') as FirestoreCollection<FirestoreDoc<Badge>>,
  nftLayerCategories: db.collection('nftLayerCategories') as FirestoreCollection<FirestoreDoc<NFTLayerCategory>>,
  completedBadgeRequirements: db.collection('completedBadgeRequirements') as FirestoreCollection<FirestoreDoc<CompletedBadgeRequirement>>,
  loreEntries: db.collection('loreEntries') as FirestoreCollection<FirestoreDoc<LoreEntry>>,
  activities: db.collection('activities') as FirestoreCollection<FirestoreDoc<Activity>>,
  notes: db.collection('notes') as FirestoreCollection<FirestoreDoc<Note>>,
  nfts: db.collection('nfts') as FirestoreCollection<FirestoreDoc<NFT>>,
} as const;

// Utility functions
export async function handleDatabaseError(error: unknown): Promise<string> {
  console.error('Database error:', error);
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected database error occurred';
}

export function convertTimestampToDate(timestamp: Timestamp): Date {
  return timestamp.toDate();
}

export function convertDateToTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
}

// Query helpers
export async function getDocumentById<T>(
  collection: FirestoreCollection<T>,
  id: string
): Promise<T | null> {
  try {
    const doc = await collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as T;
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

export async function queryCollection<T>(
  collection: FirestoreCollection<T>,
  conditions: QueryCondition<T>[] = [],
  orderBy?: OrderByOption<T>,
  limit?: number
): Promise<T[]> {
  try {
    if (conditions.length === 0) {
      const snapshot = await collection.get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
    }

    let query = collection.where(
      conditions[0].field as string,
      conditions[0].operator,
      conditions[0].value
    );
    
    // Apply additional conditions
    conditions.slice(1).forEach(({ field, operator, value }) => {
      query = query.where(field as string, operator, value);
    });

    // Apply ordering if specified
    if (orderBy) {
      query = query.orderBy(orderBy.field as string, orderBy.direction);
    }

    // Apply limit if specified
    if (limit) {
      query = query.limit(limit);
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
} 