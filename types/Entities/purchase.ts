import { sampleNotes } from "../Entities/note";
import { sampleStoreItems } from "../Entities/store-item";
import { OrderStatus, OrderStatusType } from "../enums/order-status";
import { sampleUserDetails } from "../FormattedData/user-details";

export interface Purchase {
  id: string;
  itemId: string;
  buyerId: string;
  status: OrderStatusType;
  purchaseDate: Date;
  price: number;
  paymentMethod: string;
  transactionHash: string;
  noteIds: string[];
  } 

  export const samplePurchase: Purchase[] = [{
    id: '1',
    itemId: sampleStoreItems[0].id,
    buyerId: sampleUserDetails[0].id,
    status: OrderStatus.delivered,
    purchaseDate: new Date(),
    price: 300,
    paymentMethod: '$RUGZ',
    transactionHash: '0xabc...def',
    noteIds: sampleNotes.map(note => note.id)
  },
  {
    id: '2',
    itemId: sampleStoreItems[1].id,
    buyerId: sampleUserDetails[0].id,
    status: OrderStatus.delivered,
    purchaseDate: new Date(),
    price: 300,
    paymentMethod: '$RUGZ',
    transactionHash: '0xabc...def',
    noteIds: sampleNotes.map(note => note.id)
  }
  ]