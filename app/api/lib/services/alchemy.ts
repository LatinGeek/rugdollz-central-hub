import { Network, Alchemy, Nft } from 'alchemy-sdk';
import { handleDatabaseError } from '../db';

// Alchemy API key should be in environment variables
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

if (!ALCHEMY_API_KEY) {
  throw new Error('ALCHEMY_API_KEY is not defined in environment variables');
}

// Types
export interface NFTMetadata {
  contract: {
    address: string;
    name: string;
    symbol: string;
  };
  id: {
    tokenId: string;
    tokenMetadata?: {
      tokenType: string;
    };
  };
  title: string;
  description: string;
  media: Array<{
    gateway: string;
    thumbnail: string;
    raw: string;
    format: string;
    bytes: number;
  }>;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes?: Array<{
      trait_type: string;
      value: string | number;
    }>;
  };
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

export interface CollectionNFTs {
  network: Network;
  collectionName: string;
  nfts: NFTMetadata[];
}

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
}: GetNFTsForContractParams): Promise<NFTMetadata[]> {
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

    // Transform the response to our NFTMetadata type
    return nfts.ownedNfts.map((nft: Nft) => ({
      contract: {
        address: nft.contract.address,
        name: nft.contract.name || '',
        symbol: nft.contract.symbol || '',
      },
      id: {
        tokenId: nft.tokenId,
        tokenMetadata: nft.tokenType ? { tokenType: nft.tokenType } : undefined,
      },
      title: nft.name || '',
      description: nft.description || '',
      media: nft.image ? [{
        gateway: nft.image.originalUrl || '',
        thumbnail: nft.image.thumbnailUrl || '',
        raw: nft.image.originalUrl || '',
        format: 'image/png', // Default format since it's not provided by the SDK
        bytes: 0,
      }] : [],
      metadata: {
        name: nft.name || '',
        description: nft.description || '',
        image: nft.image?.originalUrl || '',
        attributes: [], // Default empty array since attributes are not provided by the SDK
      },
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