export const LoreEntryStatus = {
    draft: 'Draft',
    published: 'Published',
    rejected: 'Rejected',
}

export type LoreEntryStatusType = typeof LoreEntryStatus[keyof typeof LoreEntryStatus]
