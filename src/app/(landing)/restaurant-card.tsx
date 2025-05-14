import Image from 'next/image'
import { Clock, ShoppingBag } from 'lucide-react'

interface RestaurantCardProps {
  name: string
  image: string
  timeRange: string
  priceRange: number
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
    <div className='rounded-2xl overflow-hidden bg-white shadow-md'>
      <div className='relative h-40'>
        <Image src={image} alt={name} fill className='object-cover' />
        {featured && (
          <span className='absolute top-0 right-0 bg-[#4E60FF] text-[11px] leading-[16px] font-bold text-white px-4 py-2 rounded-bl-xl'>
            FEATURED
          </span>
        )}
      </div>
      <div className='p-4'>
        <div className='flex items-start justify-between mb-1.5'>
          <h3 className='font-bold text-[#2B2B43] text-base md:text-lg'>{name}</h3>
          <button className='text-gray-400 hover:text-gray-500 flex-shrink-0 mt-0.5'>
            {hasItems ? (
              <div className='relative'>
                <ShoppingBag className='h-5 w-5 text-[#4E60FF]' stroke='#4E60FF' />{' '}
                <span className='absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center text-[10px] font-bold text-white bg-[#4E60FF] rounded-full'>
                  2
                </span>
              </div>
            ) : (
              <ShoppingBag className='h-5 w-5' strokeWidth={1.5} />
            )}
          </button>
        </div>
        <div className='flex items-center gap-x-2 text-neutral-500 text-xs mb-3.5'>
          <span className='flex items-center'>
            <Clock size={14} className='mr-1 text-[#83859C]' />
            {timeRange} min
          </span>
          <span className='text-[#83859C]'>•</span>
          <span className='text-[#83859C]'>${priceRange} min sum</span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {categories.map((category, index) => (
            <span
              key={index}
              className='flex items-center px-2.5 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-neutral-600'>
              {category === 'Sushi' && <span className='mr-1.5 text-sm'>🍣</span>}
              {category === 'Burger' && <span className='mr-1.5 text-sm'>🍔</span>}
              {category === 'Pizza' && <span className='mr-1.5 text-sm'>🍕</span>}
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
