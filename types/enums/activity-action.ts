export const ActivityAction = {
    newNFT: 'New NFT',
    raffleCreated: 'Raffle created',
    raffleParticipated: 'Raffle participated',
    loreEntryCreated: 'Lore entry created',
    loreEntryVoted: 'Lore entry voted',
    userRegistered: 'User registered',
}

export type ActivityActionType = typeof ActivityAction[keyof typeof ActivityAction]
