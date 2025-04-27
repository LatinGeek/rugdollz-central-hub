"use client";

import { useState } from "react";
import { RaffleDetailsComponent } from "./RaffleDetailsComponent";
import { OrderStatusType } from "@/types/enums/order-status";
import { RaffleDetails } from "@/types/FormattedData/raffle-details";
import { Note } from "@/types/Entities/note";
import { NoteDetails } from "@/types/FormattedData/note-details";
import { sampleUserDetails } from "@/types/FormattedData/user-details";
import { PurchaseConfirmDialog } from "../ui/PurchaseConfirmDialog";

interface RaffleDetailsInteractiveProps {
  initialRaffle: RaffleDetails;
  isAdmin: boolean;
}

export function RaffleDetailsInteractive({
  initialRaffle,
  isAdmin,
}: RaffleDetailsInteractiveProps) {
  const [raffle, setRaffle] = useState<RaffleDetails>(initialRaffle);
  const [newNote, setNewNote] = useState("");
  const [userJoined, setUserJoined] = useState(false);
  const [promptPurchaseConfirmation, setPromptPurchaseConfirmation] = useState(false);
  const userBalance = 3000;
  
  const handleStatusChange = (status: OrderStatusType) => {
    raffle.raffle.raffleStatus = status;
  };

  const handleAddNote = () => {
    if (!newNote.trim()) return;

    const note: Note = {
      id: "1",
      content: newNote,
      userId: "12312312",
      createdAt: new Date().toISOString(),
    };

    const noteDetails: NoteDetails = {
      note: note,
      user: sampleUserDetails[0],
    };

    setRaffle((current) => ({
      ...current,
      notes: [noteDetails, ...current.notes],
    }));
    setNewNote("");
  };

  const handleJoin = () => {
    setPromptPurchaseConfirmation(true);
  };

  const handleConfirmPurchase = () => {
    setUserJoined(true);
    setPromptPurchaseConfirmation(false);
  };

  return (
    <>
      <RaffleDetailsComponent
        raffle={raffle}
        onStatusChange={handleStatusChange}
        newNote={newNote}
        onNoteChange={setNewNote}
        onAddNote={handleAddNote}
        showStatusChange={isAdmin}
        showNoteAddition={isAdmin}
        showNotes={isAdmin}
        onJoin={handleJoin}
        userJoined={userJoined}
      />

      <PurchaseConfirmDialog
        isOpen={promptPurchaseConfirmation}
        onClose={() => setPromptPurchaseConfirmation(false)}
        onConfirm={handleConfirmPurchase}
        itemName={`Raffle Ticket: ${initialRaffle.raffle.name}`}
        itemPrice={initialRaffle.raffle.ticketPrice}
        currentBalance={userBalance}
      />
    </>
  );
}
