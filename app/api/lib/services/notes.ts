import { Note } from '@/types/Entities/note';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';

export async function createNote(noteData: Omit<Note, 'id'>): Promise<FirestoreDoc<Note>> {
  try {
    const docRef = await collections.notes.add({
      ...noteData,
      createdAt: new Date().toISOString()
    });
    
    const newNote = await docRef.get();
    return { id: newNote.id, ...newNote.data() } as FirestoreDoc<Note>;
  } catch (error) {
    throw new Error(`Failed to create note: ${error}`);
  }
}

export async function updateNote(id: string, noteData: Partial<Note>): Promise<FirestoreDoc<Note>> {
  try {
    const docRef = collections.notes.doc(id);
    await docRef.update(noteData);
    
    const updatedNote = await docRef.get();
    return { id: updatedNote.id, ...updatedNote.data() } as FirestoreDoc<Note>;
  } catch (error) {
    throw new Error(`Failed to update note: ${error}`);
  }
}

export async function deleteNote(id: string): Promise<void> {
  try {
    await collections.notes.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete note: ${error}`);
  }
}

export async function getNoteById(id: string): Promise<FirestoreDoc<Note> | null> {
  try {
    const doc = await collections.notes.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<Note>;
  } catch (error) {
    throw new Error(`Failed to get note: ${error}`);
  }
}

export async function listNotes(
  conditions?: QueryCondition<FirestoreDoc<Note>>[],
  orderBy?: OrderByOption<FirestoreDoc<Note>>,
  limit?: number
): Promise<FirestoreDoc<Note>[]> {
  try {
    return await queryCollection(collections.notes, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list notes: ${error}`);
  }
}

export async function getUserNotes(userId: string): Promise<FirestoreDoc<Note>[]> {
  try {
    return await queryCollection(
      collections.notes,
      [{ field: 'userId', operator: '==', value: userId }],
      { field: 'createdAt', direction: 'desc' }
    );
  } catch (error) {
    throw new Error(`Failed to get user notes: ${error}`);
  }
}

export async function getRecentNotes(limit: number = 10): Promise<FirestoreDoc<Note>[]> {
  try {
    return await queryCollection(
      collections.notes,
      [],
      { field: 'createdAt', direction: 'desc' },
      limit
    );
  } catch (error) {
    throw new Error(`Failed to get recent notes: ${error}`);
  }
} 