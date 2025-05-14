'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='py-4 px-5 flex items-center justify-between border-b'>
        {/* Logo */}
        <div className='flex items-center gap-1'>
          <span className='text-base font-bold text-neutral-800'>Food</span>
          <span className='text-base font-medium text-[#4263EB]'>delivery</span>
        </div>

        {/* Mobile Header Items */}
        <div className='flex items-center gap-2 md:hidden'>
          {/* Cart Icon */}
          <div className='relative'>
            <button className='p-2 bg-[#EEF1FF] rounded-full'>
              <svg
                className='h-5 w-5 text-[#4263EB]'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z' />
              </svg>
              <span className='absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs text-white bg-[#4263EB] rounded-full'>
                1
              </span>
            </button>
          </div>

          {/* Profile Image */}
          <div className='h-9 w-9 rounded-full overflow-hidden'>
            <Image
              src='/profile-placeholder.jpg'
              alt='User profile'
              width={36}
              height={36}
              className='object-cover'
            />
          </div>

          {/* Mobile Menu Button */}
          <button className='ml-1 p-2 rounded-full bg-gray-100'>
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Desktop Search Bar & Navigation - Hidden on Mobile */}
        <div className='hidden md:flex relative max-w-md w-full'>
          <Input
            type='text'
            placeholder='Search'
            className='pr-10 bg-gray-50 border-gray-200 rounded-md h-10'
          />
          <div className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
            <svg
              className='h-4 w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <div className='hidden md:flex items-center'>
          <nav className='hidden md:flex items-center mr-8'>
            <Link href='#' className='text-neutral-800 hover:text-neutral-900 px-4'>
              Restaurants
            </Link>
            <Link href='#' className='text-neutral-800 hover:text-neutral-900 px-4'>
              Deals
            </Link>
            <Link href='#' className='text-neutral-800 hover:text-neutral-900 pl-4'>
              My orders
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className='relative mr-4'>
            <button className='p-2 bg-gray-50 rounded-full'>
              <svg
                className='h-5 w-5 text-[#4263EB]'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
              </svg>
              <span className='absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs text-white bg-[#4263EB] rounded-full'>
                1
              </span>
            </button>
          </div>

          {/* Profile Image */}
          <div className='h-10 w-10 rounded-full overflow-hidden'>
            <Image
              src='/profile-placeholder.jpg'
              alt='User profile'
              width={40}
              height={40}
              className='object-cover'
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='py-5 px-5 md:py-8 md:px-10'>
        {/* Promotional Banners */}
        <div className='flex flex-col gap-4 mb-8 md:grid md:grid-cols-2 md:gap-5 md:mb-10'>
          {/* Desserts Promotion */}
          <div className='flex items-center justify-between bg-[#F3F4FF] rounded-lg p-5 overflow-hidden'>
            <div>
              <h3 className='text-base text-neutral-800 font-medium'>All deserts</h3>
              <p className='text-3xl font-bold text-[#4263EB] mt-1'>20% OFF</p>
              <p className='text-gray-500 text-xs mt-2 text-right absolute top-5 right-5'>
                Deserty
              </p>
            </div>
            <div className='relative h-24 w-24 md:h-32 md:w-32'>
              <Image src='/cupcake.png' alt='Dessert' fill className='object-contain' />
            </div>
          </div>

          {/* Burgers Promotion */}
          <div className='flex items-center justify-between bg-[#FFF8F0] rounded-lg p-5 overflow-hidden'>
            <div>
              <h3 className='text-base text-neutral-800 font-medium'>Big Burgers</h3>
              <p className='text-3xl font-bold text-[#FD6D22] mt-1'>50% OFF</p>
              <p className='text-gray-500 text-xs mt-2 text-right absolute top-5 right-5'>
                Foodies
              </p>
            </div>
            <div className='relative h-24 w-24 md:h-32 md:w-32'>
              <Image src='/burger.png' alt='Burger' fill className='object-contain' />
            </div>
          </div>
        </div>

        {/* Food Categories */}
        <div className='grid grid-cols-3 gap-3 mb-8 md:flex md:gap-4 md:overflow-x-auto md:pb-6 md:mb-10'>
          <CategoryBtn icon='🍕' label='Pizza' active={false} />
          <CategoryBtn icon='🍔' label='Burger' active={true} />
          <CategoryBtn icon='🍖' label='BBQ' active={false} />
          <CategoryBtn icon='🍣' label='Sushi' active={false} />
          <CategoryBtn icon='🥦' label='Vegan' active={false} />
          <CategoryBtn icon='🧁' label='Desserts' active={false} />
        </div>

        {/* Nearby Restaurants */}
        <section>
          <h2 className='text-lg font-semibold text-neutral-800 mb-4 md:text-xl md:mb-6'>
            Nearby restaurants
          </h2>

          <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6'>
            {/* Restaurant Card 1 */}
            <RestaurantCard
              name='Royal Sushi House'
              image='/sushi-restaurant.jpg'
              timeRange='30-40'
              priceRange='$32'
              categories={['Sushi']}
              featured={true}
            />

            {/* Restaurant Card 2 */}
            <RestaurantCard
              name='Burgers & Pizza'
              image='/burger-pizza.jpg'
              timeRange='40-60'
              priceRange='$24'
              categories={['Burger', 'Pizza']}
              featured={true}
              hasItems={true}
            />

            {/* Restaurant Card 3 */}
            <RestaurantCard
              name='Ninja sushi'
              image='/ninja-sushi.jpg'
              timeRange='20-40'
              priceRange='$40'
              categories={['Sushi']}
              featured={false}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

// Category button component
function CategoryBtn({ icon, label, active = false }) {
  return (
    <button
      className={`flex flex-col items-center justify-center py-3 px-2 border rounded-lg transition-colors ${
        active ? 'bg-blue-50 border-[#4263EB]' : 'border-gray-200'
      }`}>
      <span className='text-xl mb-1 md:text-2xl'>{icon}</span>
      <span
        className={`text-xs md:text-sm ${
          active ? 'text-[#4263EB] font-medium' : 'text-neutral-700'
        }`}>
        {label}
      </span>
    </button>
  )
}

// Restaurant card component
function RestaurantCard({
  name,
  image,
  timeRange,
  priceRange,
  categories,
  featured = false,
  hasItems = false,
}) {
  return (
    <div className='rounded-lg overflow-hidden shadow-sm border border-gray-100'>
      <div className='relative h-40 md:h-48'>
        <Image src={image} alt={name} fill className='object-cover' />
        {featured && (
          <span className='absolute top-3 right-3 md:top-4 md:left-4 bg-[#4263EB] text-xs font-medium text-white px-2 py-1 rounded'>
            FEATURED
          </span>
        )}
      </div>
      <div className='p-3 md:p-4'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='font-medium text-neutral-800 text-base'>{name}</h3>
          <button className='text-gray-400'>
            {hasItems ? (
              <div className='relative'>
                <svg className='h-5 w-5 text-[#4263EB]' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z' />
                </svg>
                <span className='absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs text-white bg-[#4263EB] rounded-full'>
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
              className='h-3 w-3 mr-1 md:h-4 md:w-4'
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
          <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
          <span>{priceRange} min sum</span>
        </div>

        <div className='flex flex-wrap gap-1 md:gap-2'>
          {categories.map((category, index) => (
            <span
              key={index}
              className='flex items-center px-2 py-0.5 bg-gray-100 rounded-md text-xs text-gray-700'>
              {category === 'Sushi' && <span className='mr-1'>🍣</span>}
              {category === 'Burger' && <span className='mr-1'>🍔</span>}
              {category === 'Pizza' && <span className='mr-1'>🍕</span>}
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
