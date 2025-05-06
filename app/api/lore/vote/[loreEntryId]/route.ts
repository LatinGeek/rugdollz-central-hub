import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/app/api/auth/middleware";
import {
  getLoreEntryById,
  updateLoreEntry,
  getUserVote,
} from "@/app/api/lib/services/lore-entries";
import { createActivity } from "@/app/api/lib/services/activities";
import { ActivityName } from "@/types/enums/activity-name";
import { ActivityAction } from "@/types/enums/activity-action";
import { Activity } from "@/types/Entities/activity";
import { getUserByAddress } from "@/app/api/lib/services/users";

export const POST = withAuth(
  async (request: NextRequest, context: { user: { address: string } }) => {
    const loreEntryId = request.url.split("/").pop()!;
    console.log(
      `[Vote] Processing vote for lore entry ${loreEntryId} by user ${context.user.address}`
    );

    try {
      // Get user data
      const user = await getUserByAddress(context.user.address);
      if (!user || !user.id) {
        console.error(`[Vote] User not found or invalid: ${context.user.address}`);
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }
      console.log(`[Vote] Found user: ${user.id}`);

      // Get the vote value from the request body
      let body;
      try {
        body = await request.json();
        console.log("[Vote] Received request body:", body);
      } catch (error) {
        console.error("[Vote] Error parsing request body:", error);
        return NextResponse.json(
          { error: "Invalid request body" },
          { status: 400 }
        );
      }

      const { voteValue } = body;
      console.log(`[Vote] Vote value: ${voteValue}`);

      // Validate vote value
      if (voteValue !== 1 && voteValue !== -1 && voteValue !== null) {
        console.error(`[Vote] Invalid vote value received: ${voteValue}`);
        return NextResponse.json(
          { error: "Invalid vote value. Must be 1, -1, or null" },
          { status: 400 }
        );
      }

      // Get the lore entry
      const loreEntry = await getLoreEntryById(loreEntryId);
      if (!loreEntry) {
        console.error(`[Vote] Lore entry not found: ${loreEntryId}`);
        return NextResponse.json(
          { error: "Lore entry not found" },
          { status: 404 }
        );
      }
      console.log(
        `[Vote] Found lore entry: ${loreEntry.id}, current votes: ${loreEntry.votes}`
      );

      // Create vote activity
      const activity: Omit<Activity, "id"> = {
        type: ActivityName.lore,
        action: ActivityAction.loreEntryVoted,
        userId: user.id,
        loreEntryId: loreEntry.id!,
        voteValue,
        createdAt: new Date(),
      };

      // Get the user's previous vote for this entry
      const previousVote = await getUserVote(
        loreEntry.id!,
        user.id
      );
      console.log(`[Vote] Previous vote for user: ${previousVote}`);

      await createActivity(activity);
      console.log(
        `[Vote] Created vote activity for user ${user.id}`
      );

      // Calculate vote change
      let voteChange = 0;
      if (previousVote === null) {
        // New vote
        voteChange = voteValue || 0;
      } else if (voteValue === null) {
        // Removing vote
        voteChange = -previousVote;
      } else {
        // Changing vote
        voteChange = voteValue - previousVote;
      }
      console.log(
        `[Vote] Calculated vote change: ${voteChange} (previous: ${previousVote}, new: ${voteValue})`
      );

      // Update lore entry votes
      const updatedEntry = await updateLoreEntry(loreEntry.id!, {
        votes: loreEntry.votes + voteChange,
      });
      console.log(
        `[Vote] Updated entry votes from ${loreEntry.votes} to ${updatedEntry.votes}`
      );

      return NextResponse.json({ votes: updatedEntry.votes });
    } catch (error) {
      console.error("[Vote] Error processing vote:", error);
      return NextResponse.json(
        { error: "Failed to process vote" },
        { status: 500 }
      );
    }
  }
);
