import { User, sampleUsers } from "../Entities/user";
import { NFT } from "../nft"

import { sampleNFTs } from "../nft"

export interface AuthenticatedUser {
  user: User,
  nfts: NFT[]

} 

export const sampleAuthenticatedUsers: AuthenticatedUser[] = [
  {
    user: sampleUsers[0],
    nfts: sampleNFTs
  }];

