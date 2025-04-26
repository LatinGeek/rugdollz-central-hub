'use client'

import { NFTCustomizer } from '@/app/components/admin/NFTCustomizer'
import { sampleNFTLayerCategoryDetails } from '@/types/FormattedData/nft-layer-category-details'

export default function NFTCustomizationPage() {
  return (
    <div className="container mx-auto px-0 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="px-4">
        <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-2">
          NFT Customization
        </h1>
        <p className="text-[rgb(var(--text-secondary))] mb-8">
          Create your unique NFT by selecting different layers and customizing its appearance.
        </p>
        </div>
        <NFTCustomizer
          baseImage="/images/sample-base-nfts/NFT_sample_1.png"
          categoryDetails={sampleNFTLayerCategoryDetails}
        />
       
      </div>
    </div>
  )
} 