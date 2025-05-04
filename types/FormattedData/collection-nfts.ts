import { Network } from "alchemy-sdk";
import { NFT } from "../Entities/nft";

export interface CollectionNFTs {
    network: Network;
    collectionName: string;
    nfts: NFT[];
  }