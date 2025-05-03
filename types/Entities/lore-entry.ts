import { LoreEntryStatusType, LoreEntryStatus } from "../enums/lore-entry-status"
import { sampleNFTs } from "./nft"

export interface LoreEntry {
  id: string
  title: string
  content: string
  authorId: string
  nftId: string
  status: LoreEntryStatusType
  createdAt: Date
  updatedAt: Date,
  votes: number
} 

export const sampleLoreEntries: LoreEntry[] = [
    {
      id: '1',
      title: 'The Tome of Eternal Flames',
      nftId: sampleNFTs[0].id,
      content: 'The Tome of Eternal Flames was discovered in the ancient ruins of the First City, its pages still warm to the touch after millennia. Legend speaks of its creation during the Great Convergence, when the elemental planes briefly aligned. The knowledge contained within is said to be capable of both creation and destruction, depending on the intent of its wielder.',
      createdAt: new Date('2024-02-20T10:30:00Z'),
      authorId: '123123',
      votes: 156,
      status: LoreEntryStatus.published,
      updatedAt: new Date('2024-02-20T10:30:00Z')
    },
    {
      id: '2',
      title: 'The Tome of the Forbidden Arts',
      nftId: sampleNFTs[1].id,
      content: 'Deep within the Forbidden Archives, this tome was sealed away by the Council of Mages. Its contents speak of arts so powerful they were deemed too dangerous for any single person to possess. The intricate patterns on its cover seem to shift and change when viewed from different angles, as if the book itself is trying to hide its true nature.',
      createdAt: new Date('2024-02-19T15:45:00Z'),
      authorId: '125125125',
      votes: 89,
      status: LoreEntryStatus.published,
      updatedAt: new Date('2024-02-20T10:30:00Z')
    },
    {
      id: '3',
      title: 'The Tome of the Earths Veins',
      nftId: sampleNFTs[2].id,
      content: 'The Tome of the Earths Veins contains ancient knowledge of ley lines and their manipulation. It was penned by the legendary geomancer Terravox during their decades-long journey mapping the worlds energy currents. Some say the book itself is bound in stone that pulses with the heartbeat of the world.',
      createdAt: new Date('2024-02-18T09:15:00Z'),
      authorId: '12512512',
      votes: 124,
      status: LoreEntryStatus.published,
      updatedAt: new Date('2024-02-20T10:30:00Z')
    }
  ]
