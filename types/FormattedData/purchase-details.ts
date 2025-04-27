import { sampleStoreItems, StoreItem } from "../Entities/store-item";
import { Purchase, samplePurchase } from "../Entities/purchase";
import { NoteDetails } from "./note-details";
import { sampleNoteDetails } from "./note-details";
import { sampleUserDetails, UserDetails } from "./user-details";

export interface PurchaseDetails {
  purchase: Purchase;
  item: StoreItem;
  buyer: UserDetails;
  notes: NoteDetails[];
}

export const samplePurchaseDetails: PurchaseDetails[] = [
  {
    purchase: samplePurchase[0],
    item: sampleStoreItems[0],
    buyer: sampleUserDetails[0],
    notes: sampleNoteDetails,
  },
  {
    purchase: samplePurchase[1],
    item: sampleStoreItems[1],
    buyer: sampleUserDetails[0],
    notes: sampleNoteDetails,
  },
];
