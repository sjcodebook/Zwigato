'use client'

import { useState } from 'react'

import { QueryKeyFactory, useServerActionQuery } from '@/hooks/use-server-action-hooks'
import RestaurantCard from '@/app/(landing)/restaurant-card'
import CategoryBtn from '@/app/(landing)/category-btn'
import FoodBanner from '@/app/(landing)/food-banner'
import LoadingSpinner from '@/components/loading-spinner'

import { getAllCategoriesAction, getAllRestaurantsAction } from './actions'

const foodBannerData = [
  {
    imageSrc: '/assets/images/food/cupcake.png',
    heading: 'All deserts',
    subheading: '20% OFF',
    category: 'Deserty',
  },
  {
    imageSrc: '/assets/images/food/burger.png',
    heading: 'Big Burgers',
    subheading: '50% OFF',
    category: 'Fooddies',
    cardBgColor: '#FFF3ED',
    headingColor: '#2B2B43',
    subheadingColor: '#FD6D22',
    categoryColor: '#83859C',
  },
]

export default function Home() {
  const [activeCategories, setActiveCategories] = useState<string[]>(['burger', 'sushi'])

  const {
    isLoading: categoriesLoading,
    data: categories,
    error: categoriesErr,
  } = useServerActionQuery(getAllCategoriesAction, {
    input: undefined,
    queryKey: QueryKeyFactory.getAllCategoriesAction(),
  })
  const {
    isLoading: restaurantsLoading,
    data: restaurants,
    error: restaurantsErr,
  } = useServerActionQuery(getAllRestaurantsAction, {
    input: undefined,
    queryKey: QueryKeyFactory.getAllRestaurantsAction(),
  })

  if (categoriesLoading || restaurantsLoading) {
    return (
      <div className='min-h-screen w-full max-w-7xl mx-auto bg-white'>
        <main className='py-6 md:py-8 px-4 md:px-6 xl:px-0'>
          <LoadingSpinner />
        </main>
      </div>
    )
  }

  if (restaurantsErr || categoriesErr) {
    return (
      <div className='min-h-screen w-full max-w-7xl mx-auto bg-white'>
        <main className='py-6 md:py-8 px-4 md:px-6 xl:px-0'>
          <h2 className='text-lg font-semibold text-neutral-800 mb-4 md:text-xl md:mb-6'>
            Failed to load data
          </h2>
        </main>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-full max-w-7xl mx-auto bg-white'>
      <main className='py-6 md:py-8 px-4 md:px-6 xl:px-0'>
        <div className='flex flex-col gap-4 mb-6 md:grid md:grid-cols-2 md:gap-8 md:mb-10'>
          {foodBannerData.map((banner, index) => (
            <FoodBanner
              key={index}
              imageSrc={banner.imageSrc}
              heading={banner.heading}
              subheading={banner.subheading}
              category={banner.category}
              cardBgColor={banner.cardBgColor}
              headingColor={banner.headingColor}
              subheadingColor={banner.subheadingColor}
              categoryColor={banner.categoryColor}
            />
          ))}
        </div>
        <div className='mt-10 grid grid-cols-3 gap-3 mb-10 md:flex md:gap-4 md:overflow-x-auto md:pb-6 md:mb-5'>
          {categories?.data &&
            categories.data.map((category, index) => (
              <CategoryBtn
                key={index}
                icon={category.icon}
                label={category.label}
                active={activeCategories.includes(category.catId)}
                catId={category.catId}
                onClick={(catId) => {
                  if (activeCategories.includes(catId)) {
                    setActiveCategories((prev) => prev.filter((id) => id !== catId))
                  } else {
                    setActiveCategories((prev) => [...prev, catId])
                  }
                }}
              />
            ))}
        </div>
        <section>
          <h2 className='text-lg font-semibold text-neutral-800 mb-4 md:text-xl md:mb-6'>
            Nearby restaurants
          </h2>
          <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-6'>
            {restaurants?.data &&
              restaurants.data
                .filter((res) => {
                  if (activeCategories.length === 0) return true
                  return res.categories.some((cat: string) => activeCategories.includes(cat))
                })
                .map((restaurant, index) => (
                  <RestaurantCard
                    key={index}
                    name={restaurant.name}
                    image={restaurant.image}
                    timeRange={restaurant.timeRange}
                    priceRange={restaurant.priceRange}
                    categories={restaurant.categories}
                    featured={restaurant.featured}
                    hasItems={restaurant.hasItems}
                    allCategories={categories?.data}
                  />
                ))}
          </div>
        </section>
      </main>
    </div>
  )
}
