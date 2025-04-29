import { NFTLayerOption } from '@/types/Entities/nft-layer-option';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';

export async function createNFTLayerOption(layerOptionData: Omit<NFTLayerOption, 'id'>): Promise<FirestoreDoc<NFTLayerOption>> {
  try {
    const docRef = await collections.nftLayerOptions.add(layerOptionData);
    
    const newLayerOption = await docRef.get();
    return { id: newLayerOption.id, ...newLayerOption.data() } as FirestoreDoc<NFTLayerOption>;
  } catch (error) {
    throw new Error(`Failed to create NFT layer option: ${error}`);
  }
}

export async function updateNFTLayerOption(id: string, layerOptionData: Partial<NFTLayerOption>): Promise<FirestoreDoc<NFTLayerOption>> {
  try {
    const docRef = collections.nftLayerOptions.doc(id);
    await docRef.update(layerOptionData);
    
    const updatedLayerOption = await docRef.get();
    return { id: updatedLayerOption.id, ...updatedLayerOption.data() } as FirestoreDoc<NFTLayerOption>;
  } catch (error) {
    throw new Error(`Failed to update NFT layer option: ${error}`);
  }
}

export async function deleteNFTLayerOption(id: string): Promise<void> {
  try {
    await collections.nftLayerOptions.doc(id).delete();
  } catch (error) {
    throw new Error(`Failed to delete NFT layer option: ${error}`);
  }
}

export async function getNFTLayerOptionById(id: string): Promise<FirestoreDoc<NFTLayerOption> | null> {
  try {
    const doc = await collections.nftLayerOptions.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as FirestoreDoc<NFTLayerOption>;
  } catch (error) {
    throw new Error(`Failed to get NFT layer option: ${error}`);
  }
}

export async function listNFTLayerOptions(
  conditions?: QueryCondition<FirestoreDoc<NFTLayerOption>>[],
  orderBy?: OrderByOption<FirestoreDoc<NFTLayerOption>>,
  limit?: number
): Promise<FirestoreDoc<NFTLayerOption>[]> {
  try {
    return await queryCollection(collections.nftLayerOptions, conditions, orderBy, limit);
  } catch (error) {
    throw new Error(`Failed to list NFT layer options: ${error}`);
  }
}

export async function getNFTLayerOptionsByCategory(categoryId: string): Promise<FirestoreDoc<NFTLayerOption>[]> {
  try {
    const category = await collections.nftLayerCategories.doc(categoryId).get();
    if (!category.exists) return [];
    
    const layerOptionIds = category.data()?.layerOptionIds || [];
    const layerOptions = await Promise.all(
      layerOptionIds.map((id: string) => getNFTLayerOptionById(id))
    );
    
    return layerOptions.filter((option): option is FirestoreDoc<NFTLayerOption> => option !== null);
  } catch (error) {
    throw new Error(`Failed to get NFT layer options by category: ${error}`);
  }
} 