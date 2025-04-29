import { User } from '@/types/Entities/user';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';

export async function createUser(userData: Omit<User, 'id'>): Promise<FirestoreDoc<User>> {
  try {
    const docRef = await collections.users.add({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
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

export async function getUserByWalletAddress(walletAddress: string): Promise<FirestoreDoc<User> | null> {
  try {
    const users = await queryCollection<FirestoreDoc<User>>(
      collections.users,
      [{ field: 'address', operator: '==', value: walletAddress }]
    );
    return users[0] || null;
  } catch (error) {
    throw new Error(`Failed to get user by wallet address: ${error}`);
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