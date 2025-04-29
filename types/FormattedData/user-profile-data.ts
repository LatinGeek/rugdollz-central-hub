import { NFT, sampleNFTs } from "../nft";
import { BadgeDetails, sampleBadgeDetails } from "./badge-details";
import { sampleUserDetails, UserDetails } from "./user-details";

export interface UserProfileData {
  user: UserDetails;
  badges: BadgeDetails[];
  nfts: NFT[];
}

export const sampleUserProfileData: UserProfileData[] = [
  {
    user: sampleUserDetails[1],
    badges: sampleBadgeDetails,
    nfts: sampleNFTs,
  },
];
