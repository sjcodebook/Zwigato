import Image from 'next/image'

import RestaurantCard from '@/app/(landing)/restaurant-card'
import CategoryBtn from '@/app/(landing)/category-btn'
import FoodBanner from '@/app/(landing)/food-banner'

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

const categoriesData = [
  {
    icon: '🍕',
    label: 'Pizza',
    active: false,
  },
  {
    icon: '🍔',
    label: 'Burger',
    active: true,
  },
  {
    icon: '🍖',
    label: 'BBQ',
    active: false,
  },
  {
    icon: '🍣',
    label: 'Sushi',
    active: true,
  },
  {
    icon: '🥦',
    label: 'Vegan',
    active: false,
  },
  {
    icon: '🧁',
    label: 'Desserts',
    active: false,
  },
]

const restaurantData = [
  {
    name: 'Royal Sushi House',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '30-40',
    priceRange: '$32',
    categories: ['Sushi'],
    featured: true,
  },
  {
    name: 'Burgers & Pizza',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '40-60',
    priceRange: '$24',
    categories: ['Burger', 'Pizza'],
    featured: true,
  },
  {
    name: 'Ninja sushi',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '20-40',
    priceRange: '$40',
    categories: ['Sushi'],
    featured: false,
  },
  {
    name: 'Ninja sushi',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '20-40',
    priceRange: '$40',
    categories: ['Sushi'],
    featured: false,
  },
  {
    name: 'Ninja sushi',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '20-40',
    priceRange: '$40',
    categories: ['Sushi'],
    featured: false,
  },
  {
    name: 'Ninja sushi',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '20-40',
    priceRange: '$40',
    categories: ['Sushi'],
    featured: false,
  },
]

export default function Home() {
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
        <div className='mt-10 grid grid-cols-3 gap-3 mb-6 md:flex md:gap-4 md:overflow-x-auto md:pb-6 md:mb-10'>
          {categoriesData.map((category, index) => (
            <CategoryBtn
              key={index}
              icon={category.icon}
              label={category.label}
              active={category.active}
            />
          ))}
        </div>
        <section>
          <h2 className='text-lg font-semibold text-neutral-800 mb-4 md:text-xl md:mb-6'>
            Nearby restaurants
          </h2>
          <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-6'>
            {restaurantData.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                name={restaurant.name}
                image={restaurant.image}
                timeRange={restaurant.timeRange}
                priceRange={restaurant.priceRange}
                categories={restaurant.categories}
                featured={restaurant.featured}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
