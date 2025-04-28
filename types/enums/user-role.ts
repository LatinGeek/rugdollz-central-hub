export const UserRole = {
    admin: 'Admin',
    mod: 'Moderator',
    user: 'User',
    guest: 'guest'
}

export type UserRoleType = typeof UserRole[keyof typeof UserRole]
