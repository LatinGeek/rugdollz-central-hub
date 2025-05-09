import { CollectionType } from "../enums/collection";

export interface NFTLayerOption {
  id: string;
  name: string;
  imageUrl: string;
  categoryId: string;
  allowedCollections: CollectionType[];
  allowedTokenIds: string[]
}

export const sampleNFTLayerOptions: NFTLayerOption[] = [
  {
    id: "1",
    name: "Halloween",
    imageUrl: "/images/sample-nft-layers/Halloween_Overlay_sample_1.png",
    categoryId: "1",
    allowedCollections: [],
    allowedTokenIds: []
  },
  {
    id: "2",
    name: "Valentine",
    imageUrl: "/images/sample-nft-layers/Valentines_Overlay_sample.png",
    categoryId: "1",
    allowedCollections: [],
    allowedTokenIds: []
  },
  {
    id: "3",
    name: "City",
    imageUrl: "/images/sample-nft-layers/xmas_overlay_1.png",
    categoryId: "1",
    allowedCollections: [],
    allowedTokenIds: []
  },
];
