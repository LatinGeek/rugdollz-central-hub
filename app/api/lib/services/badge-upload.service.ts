import { collections, db, getDocumentById, FirestoreDoc } from '@/app/api/lib/db';
import { Badge } from '@/types/Entities/badge';
import { BadgeRequirement } from '@/types/Entities/badge-requirement';
import { DocumentReference } from 'firebase-admin/firestore';

// Import all badge requirements
import { DoruzuBadgeRequirements } from './doruzu-badge-requirements';
import { GameNFTBadgeRequirements } from './game-nft-badge-requirements';
import { RugDollz3DBadgeRequirements } from './rugdollz-3D-badge-requirements';
import { RugDollzOGbadgeRequirements } from './rugdollz-og-badge-requirements';
import { RugDollzSocialBadgeRequirements } from './rugdollz-social-badge-requirements';

// Import all badges
import { DoruzuBadges } from './doruzu-badges';
import { GameNFTBadges } from './game-nft-badges';
import { RugDollz3DBadges } from './rugdollz-3D-badges';
import { RugDollzOGBadges } from './rugdollz-og-badges';
import { RugDollzSocialBadges } from './rugdollz-social-badges';

interface ChangeStats {
  added: number;
  updated: number;
  unchanged: number;
  deleted: number;
}

export class BadgeUploadService {
  /**
   * Compare two objects and return true if they have different values
   */
  private static hasChanges<T extends Badge | BadgeRequirement>(obj1: T | null | FirestoreDoc<T>, obj2: T): boolean {
    if (!obj1) return true;
    
    // Convert both objects to strings for deep comparison, excluding the id field
    const { ...rest1 } = obj1;
    const { ...rest2 } = obj2;
    
    // Remove id from comparison using type-safe approach
    const rest1WithoutId = { ...rest1 } as Partial<T | FirestoreDoc<T>>;
    const rest2WithoutId = { ...rest2 } as Partial<T>;
    delete rest1WithoutId.id;
    delete rest2WithoutId.id;
    
    const str1 = JSON.stringify(rest1WithoutId);
    const str2 = JSON.stringify(rest2WithoutId);
    return str1 !== str2;
  }

  /**
   * Get the list of IDs that exist in the database but not in the source files
   */
  private static async getOrphanedIds(
    collection: typeof collections.badges | typeof collections.badgeRequirements,
    sourceIds: string[]
  ): Promise<string[]> {
    const snapshot = await collection.get();
    const dbIds = snapshot.docs.map(doc => doc.id);
    return dbIds.filter(id => !sourceIds.includes(id));
  }

  /**
   * Upload badge requirements to Firebase with change detection
   */
  public static async uploadAllBadgeRequirements(): Promise<ChangeStats> {
    const stats: ChangeStats = {
      added: 0,
      updated: 0,
      unchanged: 0,
      deleted: 0
    };

    const allRequirements: BadgeRequirement[] = [
      ...DoruzuBadgeRequirements,
      ...GameNFTBadgeRequirements,
      ...RugDollz3DBadgeRequirements,
      ...RugDollzOGbadgeRequirements,
      ...RugDollzSocialBadgeRequirements
    ];

    const batch = db.batch();
    
    // Check for changes and update/add as needed
    for (const requirement of allRequirements) {
      const existingDoc = await getDocumentById<BadgeRequirement>(collections.badgeRequirements, requirement.id);
      
      if (!existingDoc) {
        // New requirement
        const docRef = collections.badgeRequirements.doc(requirement.id);
        batch.set(docRef, requirement);
        stats.added++;
      } else if (this.hasChanges<BadgeRequirement>(existingDoc, requirement)) {
        // Changed requirement
        const docRef = collections.badgeRequirements.doc(requirement.id);
        batch.set(docRef, requirement, { merge: true });
        stats.updated++;
      } else {
        // Unchanged requirement
        stats.unchanged++;
      }
    }

    // Check for requirements that need to be deleted
    const orphanedIds = await this.getOrphanedIds(
      collections.badgeRequirements,
      allRequirements.map(r => r.id)
    );

    orphanedIds.forEach(id => {
      const docRef = collections.badgeRequirements.doc(id);
      batch.delete(docRef);
      stats.deleted++;
    });

    if (stats.added > 0 || stats.updated > 0 || stats.deleted > 0) {
      await batch.commit();
    }

    console.log('Badge requirements sync complete:', stats);
    return stats;
  }

  /**
   * Upload badges to Firebase with change detection
   */
  public static async uploadAllBadges(): Promise<ChangeStats> {
    const stats: ChangeStats = {
      added: 0,
      updated: 0,
      unchanged: 0,
      deleted: 0
    };

    const allBadges: Badge[] = [
      ...DoruzuBadges,
      ...GameNFTBadges,
      ...RugDollz3DBadges,
      ...RugDollzOGBadges,
      ...RugDollzSocialBadges
    ];

    const batch = db.batch();

    // Check for changes and update/add as needed
    for (const badge of allBadges) {
      const existingDoc = await getDocumentById<Badge>(collections.badges, badge.id);
      
      if (!existingDoc) {
        // New badge
        const docRef = collections.badges.doc(badge.id);
        batch.set(docRef, badge);
        stats.added++;
      } else if (this.hasChanges<Badge>(existingDoc, badge)) {
        // Changed badge
        const docRef = collections.badges.doc(badge.id);
        batch.set(docRef, badge, { merge: true });
        stats.updated++;
      } else {
        // Unchanged badge
        stats.unchanged++;
      }
    }

    // Check for badges that need to be deleted
    const orphanedIds = await this.getOrphanedIds(
      collections.badges,
      allBadges.map(b => b.id)
    );

    orphanedIds.forEach(id => {
      const docRef = collections.badges.doc(id);
      batch.delete(docRef);
      stats.deleted++;
    });

    if (stats.added > 0 || stats.updated > 0 || stats.deleted > 0) {
      await batch.commit();
    }

    console.log('Badges sync complete:', stats);
    return stats;
  }

  /**
   * Upload both badge requirements and badges to Firebase with change detection
   */
  public static async uploadAll(): Promise<{ requirements: ChangeStats; badges: ChangeStats }> {
    try {
      console.log('Starting badge data sync...');
      
      const requirementsStats = await this.uploadAllBadgeRequirements();
      const badgesStats = await this.uploadAllBadges();
      
      console.log('Badge data sync completed successfully');
      return {
        requirements: requirementsStats,
        badges: badgesStats
      };
    } catch (error) {
      console.error('Error syncing badge data:', error);
      throw error;
    }
  }

  /**
   * Delete all existing badge requirements and badges from Firebase
   * Use with caution!
   */
  public static async deleteAll(): Promise<void> {
    try {
      console.log('Starting badge data deletion...');

      // Delete badge requirements
      const requirementsDocs = await collections.badgeRequirements.listDocuments();
      const requirementsBatch = db.batch();
      requirementsDocs.forEach((doc: DocumentReference) => requirementsBatch.delete(doc));
      await requirementsBatch.commit();

      // Delete badges
      const badgesDocs = await collections.badges.listDocuments();
      const badgesBatch = db.batch();
      badgesDocs.forEach((doc: DocumentReference) => badgesBatch.delete(doc));
      await badgesBatch.commit();

      console.log('Successfully deleted all badge data');
    } catch (error) {
      console.error('Error deleting badge data:', error);
      throw error;
    }
  }

  /**
   * Reset all badge data by deleting existing data and uploading fresh data
   */
  public static async reset(): Promise<{ requirements: ChangeStats; badges: ChangeStats }> {
    try {
      console.log('Starting badge data reset...');
      
      await this.deleteAll();
      const stats = await this.uploadAll();
      
      console.log('Badge data reset completed successfully');
      return stats;
    } catch (error) {
      console.error('Error resetting badge data:', error);
      throw error;
    }
  }
} 