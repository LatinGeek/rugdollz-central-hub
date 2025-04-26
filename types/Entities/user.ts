
export interface User {
  id: string
  address: string
  username?: string
  avatar?: string
  points: number,
  createdAt: Date
  updatedAt: Date
  achievements: number
} 

export const sampleUsers: User[] = [
  {
    id: '1',
    address: '0x1234567890123456789012345678901234567890',
    username: 'NFTCollector_42',
    avatar: '/images/sample-avatars/avatar-1.png',
    createdAt: new Date(),
    updatedAt: new Date(),
    points: 100,
    achievements: 10
  }];

