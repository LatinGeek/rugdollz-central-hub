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
      option.categoryId === sampleNFTLayerCategories[0].id
    ),
  }
];
