import { sampleStoreItems } from '@/types/Entities/store-item';
import { collections } from '../db';

export async function populateStoreItems(): Promise<void> {
  try {
    // Check if we already have items in the database
    const existingItems = await collections.storeItems.get();
    
    if (!existingItems.empty) {
      console.log('Store items already exist in the database. Skipping population.');
      return;
    }

    // Create a batch write
    const batch = collections.storeItems.firestore.batch();
    
    // Add each sample item to the batch
    sampleStoreItems.forEach((item) => {
      const docRef = collections.storeItems.doc();
      batch.set(docRef, {
        ...item,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });

    // Commit the batch
    await batch.commit();
    
    console.log('Successfully populated store items in the database');
  } catch (error) {
    console.error('Failed to populate store items:', error);
    throw new Error(`Failed to populate store items: ${error}`);
  }
}

// Function to clear all store items (useful for testing)
export async function clearStoreItems(): Promise<void> {
  try {
    const snapshot = await collections.storeItems.get();
    const batch = collections.storeItems.firestore.batch();
    
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log('Successfully cleared all store items from the database');
  } catch (error) {
    console.error('Failed to clear store items:', error);
    throw new Error(`Failed to clear store items: ${error}`);
  }
} 