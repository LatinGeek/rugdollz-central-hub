import { LoreEntry, sampleLoreEntries } from "../Entities/lore-entry"
import { NFT, sampleNFTs } from "../Entities/nft"
import { sampleUserDetails, UserDetails } from "./user-details"

export interface LoreEntryDetails {
  loreEntry: LoreEntry
  userDetails: UserDetails
  nft: NFT
  userVote: 1 | -1 | null
} 

export const sampleLoreEntryDetails: LoreEntryDetails[] = [
    {
      loreEntry: sampleLoreEntries[0],
      nft: sampleNFTs[0],
      userDetails: sampleUserDetails[0],
      userVote: null
    },
    {
      loreEntry: sampleLoreEntries[1],
      nft: sampleNFTs[1],
      userDetails: sampleUserDetails[1],
      userVote: null
    },
    {
      loreEntry: sampleLoreEntries[2],
      nft: sampleNFTs[2],
      userDetails: sampleUserDetails[2],
      userVote: null
    }
  ]
