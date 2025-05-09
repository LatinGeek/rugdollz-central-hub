export interface StoreItem {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  active: boolean,
  category: string
  createdAt: Date,
  updatedAt: Date
}


export const sampleStoreItems: StoreItem[] = [  {
  id: '1',
  name: 'RugDollz Racing Kart',
  description: 'High-performance racing kart for the NFT Race game',
  price: 1000,
  imageUrl: '/images/sample-nfts/nft-1.png',
  active: true,
  category: 'Game Items',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '2',
  name: 'Rugling Pet',
  description: 'Cute companion pet with special abilities',
  price: 500,
  imageUrl: '/images/sample-nfts/nft-2.png',
  active: true,
  category: 'Pets',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '3',
  name: 'Rare Skin Pack',
  description: 'Exclusive character skins for your RugDollz',
  price: 750,
  imageUrl: '/images/skin1.png',
  active: true,
  category: 'Cosmetics',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '4',
  name: 'Power Boost',
  description: 'Temporary power boost for your racing kart',
  price: 250,
  imageUrl: '/images/boost1.png',
  active: true,
  category: 'Consumables',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '5',
  name: 'VIP Pass',
  description: 'Access to exclusive events and rewards',
  price: 2000,
  imageUrl: '/images/vip1.png',
  active: true,
  category: 'Membership',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: '6',
  name: 'Starter Pack',
  description: 'Beginner bundle with essential items',
  price: 1500,
  imageUrl: '/images/starter1.png',
  active: true,
  category: 'Bundles',
  createdAt: new Date(),
  updatedAt: new Date()
}]
