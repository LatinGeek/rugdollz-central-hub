'use client'

interface GameCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

export function GameCard({ title, description, imageUrl, link }: GameCardProps) {
  return (
    <div className="group relative">
      <div className="relative w-full h-80 bg-[rgb(var(--bg-light))] rounded-lg overflow-hidden group-hover:opacity-75">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-[rgb(var(--text-primary))]">
            <a href={link}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">{description}</p>
        </div>
      </div>
    </div>
  )
} 