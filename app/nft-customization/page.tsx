'use client'

import { NFTCustomizer } from '@/app/components/admin/NFTCustomizer'

const sampleCategories: Array<{
  id: string
  name: string
  options: Array<{
    id: string
    name: string
    imageUrl: string
  }>
}> = [
  {
    id: 'background',
    name: 'Background',
    options: [
      {
        id: 'bg1',
        name: 'Halloween',
        imageUrl: '/images/sample-nft-layers/Halloween_Overlay_sample_1.png'
      },
      {
        id: 'bg2',
        name: 'Valentine',
        imageUrl: '/images/sample-nft-layers/Valentines_Overlay_sample.png'
      },
      {
        id: 'bg3',
        name: 'City',
        imageUrl: '/images/sample-nft-layers/xmas_overlay_1.png'
      },
      {
        id: 'bg4',
        name: 'Valentine',
        imageUrl: '/images/sample-nft-layers/Valentines_Overlay_sample.png'
      },
      {
        id: 'bg5',
        name: 'Halloween',
        imageUrl: '/images/sample-nft-layers/Halloween_Overlay_sample_1.png'
      },
    ]
  },
  {
    id: 'body',
    name: 'Body',
    options: [
      {
        id: 'body1',
        name: 'Classic',
        imageUrl: '/images/nft/layers/body/classic.png'
      },
      {
        id: 'body2',
        name: 'Cyber',
        imageUrl: '/images/nft/layers/body/cyber.png'
      },
      {
        id: 'body3',
        name: 'Royal',
        imageUrl: '/images/nft/layers/body/royal.png'
      }
    ]
  },
  {
    id: 'face',
    name: 'Face',
    options: [
      {
        id: 'face1',
        name: 'Happy',
        imageUrl: '/images/nft/layers/face/happy.png'
      },
      {
        id: 'face2',
        name: 'Serious',
        imageUrl: '/images/nft/layers/face/serious.png'
      },
      {
        id: 'face3',
        name: 'Wink',
        imageUrl: '/images/nft/layers/face/wink.png'
      }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    options: [
      {
        id: 'acc1',
        name: 'Glasses',
        imageUrl: '/images/nft/layers/accessories/glasses.png'
      },
      {
        id: 'acc2',
        name: 'Hat',
        imageUrl: '/images/nft/layers/accessories/hat.png'
      },
      {
        id: 'acc3',
        name: 'Necklace',
        imageUrl: '/images/nft/layers/accessories/necklace.png'
      }
    ]
  },
  {
    id: 'other',
    name: 'Other',
    options: [
      {
        id: 'acc1',
        name: 'Pipe',
        imageUrl: '/images/nft/layers/accessories/glasses.png'
      },
      {
        id: 'acc2',
        name: 'Cigar',
        imageUrl: '/images/nft/layers/accessories/hat.png'
      },
      {
        id: 'acc3',
        name: 'Necklace',
        imageUrl: '/images/nft/layers/accessories/necklace.png'
      }
    ]
  }
]

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
          categories={sampleCategories}
        />
       
      </div>
    </div>
  )
} 