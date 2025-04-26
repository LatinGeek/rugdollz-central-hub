export const OrderStatus = {
    pending: 'Pending',
    inProgress: 'In Progress',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
}

export type OrderStatusType = typeof OrderStatus[keyof typeof OrderStatus]
