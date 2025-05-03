export interface NFT {
  id: string
  tokenId: string
  name: string
  description: string
  imageUrl: string
  collection: string
  owner: string
  attributes: NFTAttribute[]
  createdAt: Date
  updatedAt: Date
}

export interface NFTAttribute {
  traitType: string
  value: string
} 

export const sampleNFTs: NFT[] = [
    {
      id: '1',
      tokenId: '1',
      name: 'Tome of Eternal Flames',
      description: 'A tome of eternal flames',
      imageUrl: '/images/sample-nfts/nft-1.png',
      collection: 'RugDollz',
      owner: '0x1234567890123456789012345678901234567890',
      attributes: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      tokenId: '2',
      name: 'Tome of the Forbidden Arts',
      description: 'A tome of the forbidden arts',
      imageUrl: '/images/sample-nfts/nft-2.png',
      collection: 'RugDollz',
      owner: '0x1234567890123456789012345678901234567890',
      attributes: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      tokenId: '3',
      name: 'Tome of the Earths Veins',
      description: 'A tome of the earths veins',
      imageUrl: '/images/sample-nfts/nft-3.png',
      collection: 'RugDollz',
      owner: '0x1234567890123456789012345678901234567890',
      attributes: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]