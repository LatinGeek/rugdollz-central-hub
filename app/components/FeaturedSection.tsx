'use client'

interface FeaturedItem {
  title: string
  description: string
  imageUrl: string
  link: string
}

export function FeaturedSection() {
  const featuredItems: FeaturedItem[] = [
    {
      title: 'NFT Race karts you can own!',
      description: 'Own unique race karts as NFTs and use them in our racing game.',
      imageUrl: '/images/race-karts.webp',
      link: '/shop/race-karts'
    },
    {
      title: 'The Ruglings NFTs are here!',
      description: 'Collect and trade our unique Ruglings NFT collection.',
      imageUrl: '/images/ruglings.png',
      link: '/shop/ruglings'
    }
  ]

  return (
    <div className="bg-[rgb(var(--bg-dark))]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {featuredItems.map((item) => (
            <div key={item.title} className="group relative">
              <div className="relative w-full h-96 bg-[rgb(var(--bg-light))] rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-[rgb(var(--text-primary))]">
                    <a href={item.link}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-lg text-[rgb(var(--text-secondary))]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 