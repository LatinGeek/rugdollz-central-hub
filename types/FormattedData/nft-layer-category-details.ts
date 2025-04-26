import { NFTLayerCategory, sampleNFTLayerCategories } from "../Entities/nft-layer-category";
import { NFTLayerOption, sampleNFTLayerOptions } from "../Entities/nft-layer-option";

export interface NFTLayerCategoryDetails {
  nftLayerCategory: NFTLayerCategory;
  nftLayerOptions: NFTLayerOption[];
}

export const sampleNFTLayerCategoryDetails: NFTLayerCategoryDetails[] = [
  {
    nftLayerCategory: sampleNFTLayerCategories[0],
    nftLayerOptions: sampleNFTLayerOptions.filter((option) =>
      sampleNFTLayerCategories[0].layerOptionIds.includes(option.id)
    ),
  },
  {
    nftLayerCategory: sampleNFTLayerCategories[1],
    nftLayerOptions: sampleNFTLayerOptions.filter((option) =>
      sampleNFTLayerCategories[1].layerOptionIds.includes(option.id)
    ),
  },
  {
    nftLayerCategory: sampleNFTLayerCategories[2],
    nftLayerOptions: sampleNFTLayerOptions.filter((option) =>
      sampleNFTLayerCategories[2].layerOptionIds.includes(option.id)
    ),
  },
  {
    nftLayerCategory: sampleNFTLayerCategories[3],
    nftLayerOptions: sampleNFTLayerOptions.filter((option) =>
      sampleNFTLayerCategories[3].layerOptionIds.includes(option.id)
    ),
  },
  {
    nftLayerCategory: sampleNFTLayerCategories[4],
    nftLayerOptions: sampleNFTLayerOptions.filter((option) =>
      sampleNFTLayerCategories[4].layerOptionIds.includes(option.id)
    ),
  },
];
