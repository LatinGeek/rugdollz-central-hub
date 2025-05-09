import { NFTLayerCategory } from '@/types/Entities/nft-layer-category';
import { collections, FirestoreDoc, QueryCondition, OrderByOption, queryCollection } from '../db';
import { FieldValue } from 'firebase-admin/firestore';
import { NFTLayerCategoryDetails } from '@/types/FormattedData/nft-layer-category-details';
import { NFTLayerOption } from '@/types/Entities/nft-layer-option';

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

export async function getNFTLayerCategoryDetailsById(categoryId: string): Promise<NFTLayerCategoryDetails | null> {
  try {
    // Get the category
    const category = await getNFTLayerCategoryById(categoryId);
    if (!category || !category.id) {
      console.log(`[getNFTLayerCategoryDetailsById] Category not found with ID: ${categoryId}`);
      return null;
    }

    // Get all layer options for this category
    const layerOptionsSnapshot = await collections.nftLayerOptions
      .where('categoryId', '==', categoryId)
      .get();

    const layerOptions = layerOptionsSnapshot.docs.map(doc => {
      const data = doc.data();
      if (!doc.id) {
        console.warn(`[getNFTLayerCategoryDetailsById] Layer option document missing ID`);
        return null;
      }
      return {
        ...data,
        id: doc.id
      } as NFTLayerOption;
    }).filter((option): option is NFTLayerOption => option !== null);

    console.log(`[getNFTLayerCategoryDetailsById] Found ${layerOptions.length} layer options for category ${category.name}`);

    return {
      nftLayerCategory: {
        ...category,
        id: category.id
      } as NFTLayerCategory,
      nftLayerOptions: layerOptions
    };
  } catch (error) {
    console.error(`[getNFTLayerCategoryDetailsById] Error fetching category details:`, error);
    throw new Error(`Failed to get NFT layer category details: ${error}`);
  }
}

export async function getAllNFTLayerCategoryDetails(): Promise<NFTLayerCategoryDetails[]> {
  try {
    // Get all categories
    const categories = await listNFTLayerCategories();
    console.log(`[getAllNFTLayerCategoryDetails] Found ${categories.length} categories`);

    // Get details for each category
    const categoryDetails = await Promise.all(
      categories.map(async (category) => {
        if (!category.id) {
          console.warn(`[getAllNFTLayerCategoryDetails] Category missing ID`);
          return null;
        }
        const details = await getNFTLayerCategoryDetailsById(category.id);
        if (!details) {
          console.warn(`[getAllNFTLayerCategoryDetails] Failed to get details for category ${category.id}`);
          return null;
        }
        return details;
      })
    );

    // Filter out any null results
    const validCategoryDetails = categoryDetails.filter((details): details is NFTLayerCategoryDetails => details !== null);
    console.log(`[getAllNFTLayerCategoryDetails] Successfully fetched details for ${validCategoryDetails.length} categories`);

    return validCategoryDetails;
  } catch (error) {
    console.error(`[getAllNFTLayerCategoryDetails] Error fetching all category details:`, error);
    throw new Error(`Failed to get all NFT layer category details: ${error}`);
  }
} 