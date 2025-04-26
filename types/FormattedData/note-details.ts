import { Note, sampleNotes } from "../Entities/note"
import { sampleUserDetails, UserDetails } from "./user-details"

export interface NoteDetails {
    note: Note,
    user: UserDetails
  }


  export const sampleNoteDetails: NoteDetails[] = [ {
      note: sampleNotes[0],
      user: sampleUserDetails[0]
    },
  {
    note: sampleNotes[1],
    user: sampleUserDetails[1]
  }]
