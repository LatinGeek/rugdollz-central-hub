import { NFTLayerCategory } from '@/types/Entities/nft-layer-category';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { FieldValue } from 'firebase-admin/firestore';

export async function createNFTLayerCategory(categoryData: Omit<NFTLayerCategory, 'id'>): Promise<FirestoreDoc<NFTLayerCategory>> {
  try {
    const docRef = await collections.nftLayerCategories.add(categoryData);
    
    const newCategory = await docRef.get();
    return { id: newCategory.id, ...newCategory.data() } as FirestoreDoc<NFTLayerCategory>;
  } catch (error) {
    throw new Error(`Failed to create NFT layer category: ${error}`);
  }
}

export async function updateNFTLayerCategory(id: string, categoryData: Partial<NFTLayerCategory>): Promise<FirestoreDoc<NFTLayerCategory>> {
  try {
    const docRef = collections.nftLayerCategories.doc(id);
    await docRef.update(categoryData);
    
    const updatedCategory = await docRef.get();
    return { id: updatedCategory.id, ...updatedCategory.data() } as FirestoreDoc<NFTLayerCategory>;
  } catch (error) {
    throw new Error(`Failed to update NFT layer category: ${error}`);
  }
}

export async function deleteNFTLayerCategory(id: string): Promise<void> {
  try {
    await collections.nftLayerCategories.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete NFT layer category: ${error}`);
  }
}

export async function getNFTLayerCategoryById(id: string): Promise<FirestoreDoc<NFTLayerCategory> | null> {
  try {
    const doc = await collections.nftLayerCategories.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<NFTLayerCategory>;
  } catch (error) {
    throw new Error(`Failed to get NFT layer category: ${error}`);
  }
}

export async function listNFTLayerCategories(
  conditions?: QueryCondition<FirestoreDoc<NFTLayerCategory>>[],
  orderBy?: OrderByOption<FirestoreDoc<NFTLayerCategory>>,
  limit?: number
): Promise<FirestoreDoc<NFTLayerCategory>[]> {
  try {
    return await queryCollection(collections.nftLayerCategories, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list NFT layer categories: ${error}`);
  }
}

export async function addLayerOptionToCategory(categoryId: string, layerOptionId: string): Promise<FirestoreDoc<NFTLayerCategory>> {
  try {
    const docRef = collections.nftLayerCategories.doc(categoryId);
    await docRef.update({
      layerOptionIds: FieldValue.arrayUnion(layerOptionId)
    });
    
    const updatedCategory = await docRef.get();
    return { id: updatedCategory.id, ...updatedCategory.data() } as FirestoreDoc<NFTLayerCategory>;
  } catch (error) {
    throw new Error(`Failed to add layer option to category: ${error}`);
  }
}

export async function removeLayerOptionFromCategory(categoryId: string, layerOptionId: string): Promise<FirestoreDoc<NFTLayerCategory>> {
  try {
    const docRef = collections.nftLayerCategories.doc(categoryId);
    await docRef.update({
      layerOptionIds: FieldValue.arrayRemove(layerOptionId)
    });
    
    const updatedCategory = await docRef.get();
    return { id: updatedCategory.id, ...updatedCategory.data() } as FirestoreDoc<NFTLayerCategory>;
  } catch (error) {
    throw new Error(`Failed to remove layer option from category: ${error}`);
  }
} 