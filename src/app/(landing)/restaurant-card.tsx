import Image from 'next/image'

interface RestaurantCardProps {
  name: string
  image: string
  timeRange: string
  priceRange: string
  categories: string[]
  featured?: boolean
  hasItems?: boolean
}

export default function RestaurantCard({
  name,
  image,
  timeRange,
  priceRange,
  categories,
  featured = false,
  hasItems = false,
}: RestaurantCardProps) {
  return (
    <div className='rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white'>
      <div className='relative h-36 md:h-48'>
        <Image src={image} alt={name} fill className='object-cover' />
        {featured && (
          <span className='absolute top-3 right-3 bg-[#4263EB] text-[10px] font-medium text-white px-2 py-0.5 rounded'>
            FEATURED
          </span>
        )}
      </div>
      <div className='p-3 md:p-4'>
        <div className='flex items-center justify-between mb-1.5 md:mb-2'>
          <h3 className='font-semibold text-neutral-800 text-sm md:text-base'>{name}</h3>
          <button className='text-gray-400'>
            {hasItems ? (
              <div className='relative'>
                <svg className='h-5 w-5 text-[#4263EB]' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z' />
                </svg>
                <span className='absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-[10px] text-white bg-[#4263EB] rounded-full'>
                  2
                </span>
              </div>
            ) : (
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            )}
          </button>
        </div>

        <div className='flex items-center gap-2 text-gray-500 text-xs md:text-sm mb-2 md:mb-3'>
          <span className='flex items-center'>
            <svg
              className='h-3.5 w-3.5 mr-1 md:h-4 md:w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            {timeRange} min
          </span>
          <span className='w-0.5 h-0.5 md:w-1 md:h-1 bg-gray-400 rounded-full'></span>
          <span>{priceRange} min sum</span>
        </div>

        <div className='flex flex-wrap gap-1.5 md:gap-2'>
          {categories.map((category, index) => (
            <span
              key={index}
              className='flex items-center px-2 py-1 bg-gray-100 rounded-md text-[10px] md:text-xs text-gray-700'>
              {category === 'Sushi' && <span className='mr-1 text-sm'>🍣</span>}
              {category === 'Burger' && <span className='mr-1 text-sm'>🍔</span>}
              {category === 'Pizza' && <span className='mr-1 text-sm'>🍕</span>}
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
