export const Collection = {
    rugDollzOG: 'RugDollz OG',
    rugDollzSocial: 'RugDollz Social',
    rugDollz3D: 'RugDollz 3D',
    doruzu: 'Doruzu',
    gameNFTs: 'Game NFTs' }

export type CollectionType = typeof Collection[keyof typeof Collection]
