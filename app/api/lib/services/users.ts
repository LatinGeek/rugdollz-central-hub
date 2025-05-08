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
  console.log(`[getUserByAddress] Starting to fetch user for address: ${address}`);
  try {
    console.log(`[getUserByAddress] Querying users collection for address: ${address}`);
    debugger;
    const users = await queryCollection<FirestoreDoc<User>>(
      collections.users,
      [{ field: 'address', operator: '==', value: address.toLowerCase() }],
      undefined,
      1
    );
    
    if (users.length === 0) {
      console.error(`[getUserByAddress] No user found for address: ${address}`);
      return null;
    }
    
    console.log(`[getUserByAddress] Successfully found user with ID: ${users[0].id}`);
    return users[0];
  } catch (error) {
    console.error(`[getUserByAddress] Error fetching user for address ${address}:`, error);
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
  console.log(`[getUserDetailsByAddress] Starting to fetch user details for address: ${address}`);
  
  try {
    // Get user
    console.log(`[getUserDetailsByAddress] Fetching user by address...`);
    const user = await getUserByAddress(address);
    if (!user) {
      console.log(`[getUserDetailsByAddress] No user found for address: ${address}`);
      return null;
    }
    console.log(`[getUserDetailsByAddress] User found with ID: ${user.id}`);
    
    // Get NFTs
    console.log(`[getUserDetailsByAddress] Fetching NFTs for address: ${address}`);
    const nfts: NFT[] = await getNFTsByOwner(address);
    console.log(`[getUserDetailsByAddress] Found ${nfts.length} NFTs for user`);

    // Get achievements (completed badge requirements)
    console.log(`[getUserDetailsByAddress] Fetching completed badge requirements for user: ${user.id}`);
    const achievements: CompletedBadgeRequirement[] = await getUserCompletedBadgeRequirements(user.id!);
    console.log(`[getUserDetailsByAddress] Found ${achievements.length} achievements for user`);

    // Build UserDetails object
    console.log(`[getUserDetailsByAddress] Building UserDetails object for user: ${user.id}`);
    const userDetails = {
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
    
    console.log(`[getUserDetailsByAddress] Successfully built UserDetails for user: ${user.id}`);
    return userDetails;
  } catch (error) {
    console.error(`[getUserDetailsByAddress] Error fetching user details for address ${address}:`, error);
    throw new Error(`Failed to get user details: ${error}`);
  }
} 