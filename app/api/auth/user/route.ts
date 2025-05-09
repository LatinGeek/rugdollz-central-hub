import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "../middleware";
import {
  getNFTsFromProvider,
  syncUserNFTsFromProvider,
} from "@/app/api/lib/services/nfts";
import { createUser, getUserByAddress } from "@/app/api/lib/services/users";
import { User } from "@/types/Entities/user";
import { UserRole } from "@/types/enums/user-role";

export const GET = withAuth(async (req: NextRequest, { user }) => {
  try {
    const { address } = user;
    console.log(`[GET /api/auth/user] Start for address: ${address}`);

    // Check if user exists in database
    let userData = await getUserByAddress(address);
    if (userData) {
      console.log(`[GET /api/auth/user] User found in DB: ${address}`);
      // Sync user's NFTs to database

      return NextResponse.json(userData);
    } else {
      console.log(
        `[GET /api/auth/user] User not found, checking NFTs for address: ${address}`
      );
      // User doesn't exist, check for NFT ownership
      const nfts = await getNFTsFromProvider(address);
      console.log(`[GET /api/auth/user] NFTs found: ${nfts.length}`);

      // Check if user owns any NFTs from whitelisted collections
      const hasWhitelistedNFT = nfts.length > 0;
      if (!hasWhitelistedNFT) {
        console.warn(
          `[GET /api/auth/user] Access denied for address: ${address} (no whitelisted NFTs)`
        );
        return NextResponse.json(
          { error: "Access denied. No whitelisted NFTs found." },
          { status: 403 }
        );
      }

      // User has whitelisted NFT, create new user
      console.log(
        `[GET /api/auth/user] Creating new user for address: ${address}`
      );
      const newUser: Omit<User, "id"> = {
        address,
        username: null,
        avatar: null,
        points: 0,
        achievements: 0,
        role: UserRole.user,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      userData = await createUser(newUser);
      console.log(`[GET /api/auth/user] New user created: ${address}`);

      // Sync user's NFTs to database
      syncUserNFTsFromProvider(address).then(() => {
        console.log(`[GET /api/auth/user] Synced NFTs for address: ${address}`);
      });

      return NextResponse.json(userData);
    }
  } catch (error) {
    console.error(
      `[GET /api/auth/user] Error for address: ${user?.address}`,
      error
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
});
