import { UserRole, UserRoleType } from "../enums/user-role"

export interface User {
  id: string | null
  address: string
  username?: string
  avatar?: string
  points: number,
  createdAt: Date
  updatedAt: Date
  achievements: number
  role: UserRoleType
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
    achievements: 10,
    role: UserRole.user
  }];

