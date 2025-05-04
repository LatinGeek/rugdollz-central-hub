import { collections } from '../db';
import { NFT, NFTAttribute } from '@/types/Entities/nft';
import { handleDatabaseError } from '../db';
import { QueryDocumentSnapshot, Query } from 'firebase-admin/firestore';
import { getNFTsFromCollections } from './alchemy';
import { CollectionNFTs } from '@/types/FormattedData/collection-nfts';

/**
 * Creates a new NFT in the database
 * @param nft The NFT data to create
 * @returns The created NFT with ID
 */
export async function createNFT(nft: Omit<NFT, 'id'>): Promise<NFT> {
  try {
    const docRef = await collections.nfts.add({
      ...nft,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      ...nft,
      id: docRef.id,
    };
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Updates an existing NFT in the database
 * @param id The ID of the NFT to update
 * @param nft The updated NFT data
 * @returns The updated NFT
 */
export async function updateNFT(id: string, nft: Partial<Omit<NFT, 'id'>>): Promise<NFT> {
  try {
    debugger;
    const docRef = collections.nfts.doc(id);
    const updateData = {
      ...nft,
      updatedAt: new Date(),
    };

    await docRef.update(updateData);

    const updatedDoc = await docRef.get();
    if (!updatedDoc.exists) {
      throw new Error('NFT not found');
    }

    return {
      id: updatedDoc.id,
      ...updatedDoc.data(),
    } as NFT;
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Deletes an NFT from the database
 * @param id The ID of the NFT to delete
 */
export async function deleteNFT(id: string): Promise<void> {
  try {
    await collections.nfts.doc(id).delete();
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Gets an NFT by its ID
 * @param id The ID of the NFT to retrieve
 * @returns The NFT if found, null otherwise
 */
export async function getNFTById(id: string): Promise<NFT | null> {
  try {
    const doc = await collections.nfts.doc(id).get();
    if (!doc.exists) return null;

    return {
      id: doc.id,
      ...doc.data(),
    } as NFT;
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Lists all NFTs with optional filtering
 * @param owner Optional owner address to filter by
 * @param collection Optional collection name to filter by
 * @returns Array of NFTs matching the filters
 */
export async function listNFTs(owner?: string, collection?: string): Promise<NFT[]> {
  try {
    let query: Query = collections.nfts;

    if (owner) {
      query = query.where('owner', '==', owner);
    }

    if (collection) {
      query = query.where('collection', '==', collection);
    }

    const snapshot = await query.get();
    return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
      id: doc.id,
      ...doc.data(),
    })) as NFT[];
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Gets NFTs owned by a specific wallet address
 * @param owner The wallet address to get NFTs for
 * @returns Array of NFTs owned by the wallet
 */
export async function getNFTsByOwner(owner: string): Promise<NFT[]> {
  return listNFTs(owner);
}

/**
 * Gets NFTs from a specific collection
 * @param collection The collection name to get NFTs from
 * @returns Array of NFTs in the collection
 */
export async function getNFTsByCollection(collection: string): Promise<NFT[]> {
  return listNFTs(undefined, collection);
}

/**
 * Updates NFT attributes
 * @param id The ID of the NFT to update
 * @param attributes The new attributes to set
 * @returns The updated NFT
 */
export async function updateNFTAttributes(id: string, attributes: NFTAttribute[]): Promise<NFT> {
  return updateNFT(id, { attributes });
}

/**
 * Transfers an NFT to a new owner
 * @param id The ID of the NFT to transfer
 * @param newOwner The new owner's wallet address
 * @returns The updated NFT
 */
export async function transferNFT(id: string, newOwner: string): Promise<NFT> {
  return updateNFT(id, { owner: newOwner });
}

/**
 * Fetches NFTs from Alchemy provider without storing them
 * @param walletAddress The wallet address to fetch NFTs for
 * @returns Array of NFT metadata from the provider
 */
export async function getNFTsFromProvider(walletAddress: string): Promise<NFT[]> {
  try {
    // Get NFTs from Alchemy
    const collectionNFTs : CollectionNFTs[] = await getNFTsFromCollections(walletAddress);
    
    // Flatten the collection NFTs into a single array
    return collectionNFTs.flatMap(collection => collection.nfts);
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Syncs user's NFTs from the provider to the database
 * @param walletAddress The wallet address to sync NFTs for
 * @returns Array of NFTs stored in the database
 */
export async function syncUserNFTsFromProvider(walletAddress: string): Promise<NFT[]> {
  try {
    // Get NFTs from provider
    const providerNFTs: NFT[] = await getNFTsFromProvider(walletAddress);
    const storedNFTs: NFT[] = [];

    // Get existing NFTs from database
    const existingNFTs = await getNFTsByOwner(walletAddress);
    const existingNFTsMap = new Map(existingNFTs.map(nft => [nft.tokenId, nft]));
    debugger;
    // Process each NFT from the provider
    for (const nftData of providerNFTs) {
      const existingNFT = existingNFTsMap.get(nftData.tokenId);

      if (existingNFT) {
        // Update existing NFT if needed
        const needsUpdate = 
          existingNFT.name !== nftData.name ||
          existingNFT.description !== nftData.description ||
          existingNFT.imageUrl !== nftData.imageUrl ||
          JSON.stringify(existingNFT.attributes) !== JSON.stringify(
            nftData.attributes
          );

        if (needsUpdate) {
          const updatedNFT = await updateNFT(existingNFT.id, {
            name: nftData.name,
            description: nftData.description,
            imageUrl: nftData.imageUrl,
            attributes: nftData.attributes,
            updatedAt: new Date(),
          });
          storedNFTs.push(updatedNFT);
        } else {
          storedNFTs.push(existingNFT);
        }
      } else {
        // Create new NFT
        const newNFT = await createNFT({
          tokenId: nftData.id,
          name: nftData.name,
          description: nftData.description,
          imageUrl: nftData.imageUrl,
          collection: nftData.collection,
          owner: walletAddress,
          attributes: nftData.attributes,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        storedNFTs.push(newNFT);
      }
    }

    // Handle NFTs that are in the database but not in the provider
    // (e.g., if they were transferred out)
    const providerTokenIds = new Set(providerNFTs.map(nft => nft.tokenId));
    for (const existingNFT of existingNFTs) {
      if (!providerTokenIds.has(existingNFT.tokenId)) {
        // NFT is no longer owned by the user
        await deleteNFT(existingNFT.id);
      }
    }

    return storedNFTs;
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
} 