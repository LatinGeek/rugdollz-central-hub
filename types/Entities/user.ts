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
    address: '0x158a9e87156B6605B6f23bb8f4A8E4F47fc67f1c',
    username: 'LatinGeek',
    avatar: '/images/sample-user-profile-images/latin2.webp',
    createdAt: new Date(),
    updatedAt: new Date(),
    points: 100,
    achievements: 10,
    role: UserRole.user
  }];

