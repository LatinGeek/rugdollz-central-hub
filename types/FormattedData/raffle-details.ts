import { sampleUsers, User } from "../Entities/user";
import { Raffle, sampleRaffles } from "../Entities/raffle";
import { NoteDetails, sampleNoteDetails } from "./note-details";
export interface RaffleDetails {
  raffle: Raffle;
  notes: NoteDetails[];
  winner?: User;
  } 

  export const sampleRaffleDetails: RaffleDetails[] = [{
    raffle: sampleRaffles[0],
    winner: sampleUsers[0],
    notes: sampleNoteDetails
  }]