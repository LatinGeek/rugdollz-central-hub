import { Badge, sampleBadges } from "../Entities/badge";
import { NFT, sampleNFTs } from "../nft";
import { sampleUserDetails, UserDetails } from "./user-details";

export interface UserProfileData {
  user: UserDetails;
  badges: Badge[];
  nfts: NFT[];
}

export const sampleUserProfileData: UserProfileData[] = [
  {
    user: sampleUserDetails[0],
    badges: sampleBadges,
    nfts: sampleNFTs,
  },
];
