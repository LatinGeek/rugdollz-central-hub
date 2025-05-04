import { Network, Alchemy, Nft } from 'alchemy-sdk';
import { handleDatabaseError } from '../db';
import { NFT } from '@/types/Entities/nft';
import { CollectionNFTs } from '@/types/FormattedData/collection-nfts';

// Alchemy API key should be in environment variables
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

if (!ALCHEMY_API_KEY) {
  throw new Error('ALCHEMY_API_KEY is not defined in environment variables');
}

export interface GetNFTsForContractParams {
  walletAddress: string;
  contractAddress: string;
  network?: Network;
}

// Hardcoded NFT collections and their networks
const NFT_COLLECTIONS = {
  [Network.ETH_MAINNET]: [
    {
      name: 'RugDollz',
      address: '0x291aC379AF66E25bd8488b3154f076B27B9f9e36',
    },
    {
      name: 'RugDollz 3D',
      address: '0xF4960b243bfeF0cb2c1278D61EC6ABCa47e4C9Fb',
    },
    {
      name: 'RugDollz Social',
      address: '0x2dA9c39419D2213bD986Dfbf64e80B2667A0b300',
    },
  ],
  [Network.APECHAIN_MAINNET]: [
    {
      name: 'DORUZU',
      address: '0x125e213B5CfC84dBaD82BEDeF7B2e28697f62b3C',
    },
  ],
} as const;

/**
 * Retrieves NFTs from multiple collections across different networks for a wallet
 * @param walletAddress The wallet address to check
 * @returns Array of NFTs grouped by collection and network
 */
export async function getNFTsFromCollections(walletAddress: string): Promise<CollectionNFTs[]> {
  try {
    const results: CollectionNFTs[] = [];

    // Process each network
    for (const [network, collections] of Object.entries(NFT_COLLECTIONS)) {
      // Process each collection in the network
      for (const collection of collections) {
        try {
          const nfts = await getNFTsForContract({
            walletAddress,
            contractAddress: collection.address,
            network: network as Network,
          });

          if (nfts.length > 0) {
            results.push({
              network: network as Network,
              collectionName: collection.name,
              nfts,
            });
          }
        } catch (error) {
          console.error(`Error fetching NFTs for ${collection.name} on ${network}:`, error);
          // Continue with other collections even if one fails
          continue;
        }
      }
    }

    return results;
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Retrieves NFTs owned by a wallet for a specific contract
 * @param params Parameters including wallet address, contract address, and optional network
 * @returns Array of NFT metadata
 */
export async function getNFTsForContract({
  walletAddress,
  contractAddress,
  network = Network.ETH_MAINNET,
}: GetNFTsForContractParams): Promise<NFT[]> {
  try {
    // Create a new Alchemy instance with the specified network
    const alchemyInstance = new Alchemy({
      apiKey: ALCHEMY_API_KEY,
      network,
    });

    // Get NFTs for the wallet
    const nfts = await alchemyInstance.nft.getNftsForOwner(walletAddress, {
      contractAddresses: [contractAddress], 
    });
    // Transform the response to our NFT type
    return nfts.ownedNfts.map((nft: Nft) => ({
      id: nft.tokenId, // or another unique identifier if available
      tokenId: nft.tokenId,
      name: nft.name || '',
      description: nft.description || '',
      imageUrl: nft.image?.originalUrl || '',
      collection: nft.contract.name || '',
      owner: walletAddress, // or nft.owner if available
      attributes: nft.raw?.metadata?.attributes?.map((attr: { trait_type: string; value: string; }) => ({
        traitType: attr.trait_type,
        value: attr.value
      })) || [],
      createdAt: new Date(), // or use a real date if available
      updatedAt: new Date(), // or use a real date if available
    }));
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Gets the current gas price for a specific network
 * @param network The network to get gas price for
 * @returns The current gas price in wei
 */
export async function getGasPrice(network: Network = Network.ETH_MAINNET): Promise<string> {
  try {
    const alchemyInstance = new Alchemy({
      apiKey: ALCHEMY_API_KEY,
      network,
    });

    const gasPrice = await alchemyInstance.core.getGasPrice();
    return gasPrice.toString();
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
}

/**
 * Gets the balance of a wallet in wei
 * @param walletAddress The wallet address to check
 * @param network The network to check balance on
 * @returns The wallet balance in wei
 */
export async function getBalance(
  walletAddress: string,
  network: Network = Network.ETH_MAINNET
): Promise<string> {
  try {
    const alchemyInstance = new Alchemy({
      apiKey: ALCHEMY_API_KEY,
      network,
    });

    const balance = await alchemyInstance.core.getBalance(walletAddress);
    return balance.toString();
  } catch (error) {
    throw new Error(await handleDatabaseError(error));
  }
} 