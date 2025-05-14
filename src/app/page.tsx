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

export default function Home() {
  return (
    <div className='min-h-screen w-full max-w-7xl mx-auto bg-white'>
      <main className='py-6 md:py-8 '>
        <div className='flex flex-col gap-4 mb-6 md:grid md:grid-cols-2 md:gap-5 md:mb-10'>
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

        {/* <div className='grid grid-cols-3 gap-3 mb-6 md:flex md:gap-4 md:overflow-x-auto md:pb-6 md:mb-10'>
          <CategoryBtn icon='🍕' label='Pizza' active={false} />
          <CategoryBtn icon='🍔' label='Burger' active={true} />
          <CategoryBtn icon='🍖' label='BBQ' active={false} />
          <CategoryBtn icon='🍣' label='Sushi' active={false} />
          <CategoryBtn icon='🥦' label='Vegan' active={false} />
          <CategoryBtn icon='🧁' label='Desserts' active={false} />
        </div>

        <section>
          <h2 className='text-lg font-semibold text-neutral-800 mb-4 md:text-xl md:mb-6'>
            Nearby restaurants
          </h2>

          <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6'>
            <RestaurantCard
              name='Royal Sushi House'
              image='/sushi-restaurant.jpg'
              timeRange='30-40'
              priceRange='$32'
              categories={['Sushi']}
              featured={true}
            />

            <RestaurantCard
              name='Burgers & Pizza'
              image='/burger-pizza.jpg'
              timeRange='40-60'
              priceRange='$24'
              categories={['Burger', 'Pizza']}
              featured={true}
              hasItems={true}
            />

            <RestaurantCard
              name='Ninja sushi'
              image='/ninja-sushi.jpg'
              timeRange='20-40'
              priceRange='$40'
              categories={['Sushi']}
              featured={false}
            />
          </div>
        </section> */}
      </main>
    </div>
  )
}
