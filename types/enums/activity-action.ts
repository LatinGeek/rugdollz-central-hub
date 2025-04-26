export const ActivityAction = {
    newNFT: 'New NFT',
    raffleCreated: 'Raffle created',
    loreEntryCreated: 'Lore entry created',
    userRegistered: 'User registered'
}

export type ActivityActionType = typeof ActivityAction[keyof typeof ActivityAction]
