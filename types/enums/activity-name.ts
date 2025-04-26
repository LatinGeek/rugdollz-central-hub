export const ActivityName = {
    nft: 'NFT',
    raffle: 'Raffle',
    lore: 'Lore',
    user: 'User'
}

export type ActivityNameType = typeof ActivityName[keyof typeof ActivityName]
