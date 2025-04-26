export interface NFTLayerCategory {
  id: string;
  name: string;
  layerOptionIds: string[];
}

export const sampleNFTLayerCategories: NFTLayerCategory[] = [
  {
    id: "background",
    name: "Background",
    layerOptionIds: ["1", "2", "3", "4", "5"],
  },
  {
    id: "body",
    name: "Body",
    layerOptionIds: ["6", "7", "8"],
  },
  {
    id: "face",
    name: "Face",
    layerOptionIds: ["9", "10", "11"],
  },
  {
    id: "accessories",
    name: "Accessories",
    layerOptionIds: ["12", "13", "14"],
  },
  {
    id: "other",
    name: "Other",
    layerOptionIds: ["15", "16", "17"],
  },
];
