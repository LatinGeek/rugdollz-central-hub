"use client";

import { useEffect, useState } from "react";
import { NFTCustomizer } from "@/app/components/admin/NFTCustomizer";
import { NFTLayerCategoryDetails } from "@/types/FormattedData/nft-layer-category-details";
import { useNFTCustomizationService } from "@/services/nft-customization";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";
import { useAuth } from "../contexts/AuthContext";

export default function NFTCustomizationPage() {
  const [categoryDetails, setCategoryDetails] = useState<
    NFTLayerCategoryDetails[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const nftCustomizationService = useNFTCustomizationService();
  const { user } = useAuth();

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const details =
          await nftCustomizationService.getNFTLayerCategoryDetails();
        setCategoryDetails(details);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch NFT layer category details:", err);
        setError(
          "Failed to load NFT customization options. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };
    if (user) {
      fetchCategoryDetails();
    }
  }, [user]);

  return (
    <div className="container mx-auto px-0 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="px-4">
          <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-2">
            NFT Customization
          </h1>
          <p className="text-[rgb(var(--text-secondary))] mb-8">
            Create your unique NFT by selecting different layers and customizing
            its appearance.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner size="md" />
          </div>
        ) : error ? (
          <div className="px-4 text-red-500">{error}</div>
        ) : (
          <NFTCustomizer
            baseImage="/images/sample-base-nfts/NFT_sample_1.png"
            categoryDetails={categoryDetails}
          />
        )}
      </div>
    </div>
  );
}
