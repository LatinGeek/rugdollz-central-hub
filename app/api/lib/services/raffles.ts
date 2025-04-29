import { Raffle } from '@/types/Entities/raffle';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { RaffleStatus } from '@/types/enums/raffle-status';
import { FieldValue } from 'firebase-admin/firestore';

export async function createRaffle(raffleData: Omit<Raffle, 'id'>): Promise<FirestoreDoc<Raffle>> {
  try {
    const docRef = await collections.raffles.add({
      ...raffleData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    const newRaffle = await docRef.get();
    return { id: newRaffle.id, ...newRaffle.data() } as FirestoreDoc<Raffle>;
  } catch (error) {
    throw new Error(`Failed to create raffle: ${error}`);
  }
}

export async function updateRaffle(id: string, raffleData: Partial<Raffle>): Promise<FirestoreDoc<Raffle>> {
  try {
    const docRef = collections.raffles.doc(id);
    await docRef.update({
      ...raffleData,
      updatedAt: new Date()
    });
    
    const updatedRaffle = await docRef.get();
    return { id: updatedRaffle.id, ...updatedRaffle.data() } as FirestoreDoc<Raffle>;
  } catch (error) {
    throw new Error(`Failed to update raffle: ${error}`);
  }
}

export async function deleteRaffle(id: string): Promise<void> {
  try {
    await collections.raffles.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete raffle: ${error}`);
  }
}

export async function getRaffleById(id: string): Promise<FirestoreDoc<Raffle> | null> {
  try {
    const doc = await collections.raffles.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<Raffle>;
  } catch (error) {
    throw new Error(`Failed to get raffle: ${error}`);
  }
}

export async function listRaffles(
  conditions?: QueryCondition<FirestoreDoc<Raffle>>[],
  orderBy?: OrderByOption<FirestoreDoc<Raffle>>,
  limit?: number
): Promise<FirestoreDoc<Raffle>[]> {
  try {
    return await queryCollection(collections.raffles, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list raffles: ${error}`);
  }
}

export async function getActiveRaffles(): Promise<FirestoreDoc<Raffle>[]> {
  try {
    return await queryCollection(
      collections.raffles,
      [{ field: 'raffleStatus', operator: '==', value: RaffleStatus.active }],
      { field: 'endDate', direction: 'asc' }
    );
  } catch (error) {
    throw new Error(`Failed to get active raffles: ${error}`);
  }
}

export async function getUpcomingRaffles(): Promise<FirestoreDoc<Raffle>[]> {
  try {
    return await queryCollection(
      collections.raffles,
      [{ field: 'raffleStatus', operator: '==', value: RaffleStatus.programmed }],
      { field: 'startDate', direction: 'asc' }
    );
  } catch (error) {
    throw new Error(`Failed to get upcoming raffles: ${error}`);
  }
}

export async function getRafflesByCategory(category: string): Promise<FirestoreDoc<Raffle>[]> {
  try {
    return await queryCollection(
      collections.raffles,
      [{ field: 'category', operator: '==', value: category }],
      { field: 'startDate', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get raffles by category: ${error}`);
  }
}

export async function updateRaffleStatus(id: string, status: string): Promise<FirestoreDoc<Raffle>> {
  try {
    const docRef = collections.raffles.doc(id);
    await docRef.update({
      raffleStatus: status,
      updatedAt: new Date()
    });
    
    const updatedRaffle = await docRef.get();
    return { id: updatedRaffle.id, ...updatedRaffle.data() } as FirestoreDoc<Raffle>;
  } catch (error) {
    throw new Error(`Failed to update raffle status: ${error}`);
  }
}

export async function incrementSoldTickets(id: string): Promise<FirestoreDoc<Raffle>> {
  try {
    const docRef = collections.raffles.doc(id);
    await docRef.update({
      soldTickets: FieldValue.increment(1),
      updatedAt: new Date()
    });
    
    const updatedRaffle = await docRef.get();
    return { id: updatedRaffle.id, ...updatedRaffle.data() } as FirestoreDoc<Raffle>;
  } catch (error) {
    throw new Error(`Failed to increment sold tickets: ${error}`);
  }
} 