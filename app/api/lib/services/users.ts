import { User } from '@/types/Entities/user';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { getNFTsByOwner } from './nfts';
import { CompletedBadgeRequirement } from '@/types/Entities/completed-badge-requirement';
import { NFT } from '@/types/Entities/nft';
import { UserDetails } from '@/types/FormattedData/user-details';
import { getUserCompletedBadgeRequirements } from './completed-badge-requirements';

export async function createUser(userData: Omit<User, 'id'>): Promise<FirestoreDoc<User>> {
  try {
    // First create the document to get the ID
    const docRef = await collections.users.add({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    // Then update the document to include its own ID
    await docRef.update({
      id: docRef.id
    });
    
    const newUser = await docRef.get();
    return { id: newUser.id, ...newUser.data() } as FirestoreDoc<User>;
  } catch (error) {
    throw new Error(`Failed to create user: ${error}`);
  }
}

export async function updateUser(id: string, userData: Partial<User>): Promise<FirestoreDoc<User>> {
  try {
    const docRef = collections.users.doc(id);
    await docRef.update({
      ...userData,
      updatedAt: new Date()
    });
    
    const updatedUser = await docRef.get();
    return { id: updatedUser.id, ...updatedUser.data() } as FirestoreDoc<User>;
  } catch (error) {
    throw new Error(`Failed to update user: ${error}`);
  }
}

export async function deleteUser(id: string): Promise<void> {
  try {
    await collections.users.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete user: ${error}`);
  }
}

export async function getUserById(id: string): Promise<FirestoreDoc<User> | null> {
  try {
    const doc = await collections.users.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<User>;
  } catch (error) {
    throw new Error(`Failed to get user: ${error}`);
  }
}

export async function getUserByAddress(address: string): Promise<FirestoreDoc<User> | null> {
  try {
    const users = await queryCollection<FirestoreDoc<User>>(
      collections.users,
      [{ field: 'address', operator: '==', value: address }],
      undefined,
      1
    );
    return users[0] || null;
  } catch (error) {
    throw new Error(`Failed to get user by address: ${error}`);
  }
}

export async function listUsers(
  conditions?: QueryCondition<FirestoreDoc<User>>[],
  orderBy?: OrderByOption<FirestoreDoc<User>>,
  limit?: number
): Promise<FirestoreDoc<User>[]> {
  try {
    return await queryCollection(collections.users, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list users: ${error}`);
  }
}

export async function getUserByEmail(email: string): Promise<FirestoreDoc<User> | null> {
  try {
    const users = await queryCollection<FirestoreDoc<User>>(
      collections.users,
      [{ field: 'address', operator: '==', value: email }]
    );
    return users[0] || null;
  } catch (error) {
    throw new Error(`Failed to get user by email: ${error}`);
  }
}

export async function getTopUsers(limit: number = 10): Promise<FirestoreDoc<User>[]> {
  try {
    return await queryCollection(
      collections.users,
      [],
      { field: 'points', direction: 'desc' },
      limit
    );
  } catch (error) {
    throw new Error(`Failed to get top users: ${error}`);
  }
}

export async function getUserDetailsByAddress(address: string): Promise<UserDetails | null> {
  // Get user
  const user = await getUserByAddress(address);
  if (!user) return null;
  
  // Get NFTs
  const nfts: NFT[] = await getNFTsByOwner(address);

  // Get achievements (completed badge requirements)
  const achievements: CompletedBadgeRequirement[] = await getUserCompletedBadgeRequirements(user.id!)

  // Build UserDetails object
  return {
    id: user.id!,
    address: user.address,
    username: user.username,
    avatar: user.avatar,
    points: user.points,
    nfts,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    achievements,
  };
} 