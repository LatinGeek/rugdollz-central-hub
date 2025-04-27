import { get, post, put, del } from './api'
import { Badge } from '@/types/Entities/badge'

export async function getBadges() {
  return get<Badge[]>('/badges')
}

export async function getBadgeById(id: string) {
  return get<Badge>(`/badges/${id}`)
}

export async function createBadge(badge: Omit<Badge, 'id'>) {
  return post<Badge>('/badges', badge)
}

export async function updateBadge(id: string, badge: Partial<Badge>) {
  return put<Badge>(`/badges/${id}`, badge)
}

export async function deleteBadge(id: string) {
  return del<Badge>(`/badges/${id}`)
} 