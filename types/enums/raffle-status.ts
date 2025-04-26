export const RaffleStatus = {
    programmed: 'Programmed',
    active: 'Active',
    ended: 'Ended',
    cancelled: 'Cancelled'
}

export type RaffleStatusType = typeof RaffleStatus[keyof typeof RaffleStatus]
