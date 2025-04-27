import { RaffleStatus, RaffleStatusType } from "../enums/raffle-status";
import { OrderStatus, OrderStatusType } from "../enums/order-status";
import { sampleNotes } from "./note";

export interface Raffle {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  ticketPrice: number;
  totalTickets: number;
  soldTickets: number;
  category: string;
  winnerAddress?: string;
  raffleStatus: RaffleStatusType;
  orderStatus?: OrderStatusType;
  createdAt: Date;
  updatedAt: Date;
  noteIds: string[];
}

export const sampleRaffles: Raffle[] = [
  {
    id: "1",
    name: "Tome of Eternal Flames Raffle",
    description:
      "Win this legendary tome containing ancient knowledge of fire magic",
    winnerAddress: "0x123...456",
    raffleStatus: RaffleStatus.programmed,
    orderStatus: OrderStatus.pending,
    startDate: new Date("2024-03-15T00:00:00Z"),
    endDate: new Date("2025-04-28T00:00:00Z"),
    category: "Bundles",
    ticketPrice: 70,
    totalTickets: 100,
    soldTickets: 85,
    noteIds: sampleNotes.map((note) => note.id),
    imageUrl: "/images/sample-nfts/nft-1.png",
    createdAt: new Date("2024-03-15T00:00:00Z"),
    updatedAt: new Date("2024-03-15T00:00:00Z"),
  },
];

export function generateDefaultRaffle(): Raffle {
  return {
    id: "",
    name: "Untitled Raffle",
    description: "Description of the new raffle",
    winnerAddress: undefined,
    raffleStatus: RaffleStatus.programmed,
    orderStatus: undefined,
    startDate: new Date(),
    endDate: new Date(),
    category: "Untitled Category",
    ticketPrice: 0,
    totalTickets: 0,
    soldTickets: 0,
    noteIds: [],
    imageUrl: "/images/sample-nfts/nft-1.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
