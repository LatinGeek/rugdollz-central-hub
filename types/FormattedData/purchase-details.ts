import { Note, sampleNotes } from "../Entities/note";
import { sampleUsers, User } from "../Entities/user";
import { sampleStoreItems, StoreItem } from "../Entities/store-item";
import { Purchase, samplePurchase } from "../Entities/purchase";

export interface PurchaseDetails {
  purchase: Purchase;
  item: StoreItem;
  buyer: User;
  notes: Note[];
}

export const samplePurchaseDetails: PurchaseDetails[] = [
  {
    purchase: samplePurchase[0],
    item: sampleStoreItems[0],
    buyer: sampleUsers[0],
    notes: sampleNotes,
  },
  {
    purchase: samplePurchase[1],
    item: sampleStoreItems[1],
    buyer: sampleUsers[1],
    notes: sampleNotes,
  },
];
