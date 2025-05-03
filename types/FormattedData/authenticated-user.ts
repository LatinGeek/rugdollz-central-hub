import { User, sampleUsers } from "../Entities/user";
import { NFT } from "../Entities/nft"

import { sampleNFTs } from "../Entities/nft"

export interface AuthenticatedUser {
  user: User,
  nfts: NFT[]

} 

export const sampleAuthenticatedUsers: AuthenticatedUser[] = [
  {
    user: sampleUsers[0],
    nfts: sampleNFTs
  }];

