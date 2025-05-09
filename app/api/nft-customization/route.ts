import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "../auth/middleware";
import { getAllNFTLayerCategoryDetails } from "../lib/services/nft-layer-categories";

export const GET = withAuth(
  async (req: NextRequest, context: { user: { address: string } }) => {
    try {
      console.log(
        `[GET /api/nft-customization] User ${context.user.address} fetching all NFT layer category details`
      );

      const categoryDetails = await getAllNFTLayerCategoryDetails();

      console.log(
        `[GET /api/nft-customization] Successfully retrieved ${categoryDetails.length} category details for user ${context.user.address}`
      );

      return NextResponse.json(categoryDetails);
    } catch (error) {
      console.error(
        `[GET /api/nft-customization] Error for user ${context.user.address}:`,
        error
      );
      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch NFT customization data",
        },
        { status: 500 }
      );
    }
  }
);
