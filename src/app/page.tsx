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
    catId: 'pizza',
    icon: '🍕',
    label: 'Pizza',
    active: false,
  },
  {
    catId: 'burger',
    icon: '🍔',
    label: 'Burger',
    active: true,
  },
  {
    catId: 'pasta',
    icon: '🍖',
    label: 'BBQ',
    active: false,
  },
  {
    catId: 'sushi',
    icon: '🍣',
    label: 'Sushi',
    active: true,
  },
  {
    catId: 'salad',
    icon: '🥦',
    label: 'Vegan',
    active: false,
  },
  {
    catId: 'desserts',
    icon: '🧁',
    label: 'Desserts',
    active: false,
  },
]

const restaurantData = [
  {
    restaurantId: 'royal-sushi-house',
    name: 'Royal Sushi House',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '30-40',
    priceRange: 32,
    categories: ['sushi'],
    featured: true,
    hasItems: true,
  },
  {
    restaurantId: 'burgers-pizza',
    name: 'Burgers & Pizza',
    image: '/assets/images/restaurants/burgers-pizza.png',
    timeRange: '40-60',
    priceRange: 24,
    categories: ['burger', 'pizza'],
    featured: true,
  },
  {
    restaurantId: 'ninja-sushi',
    name: 'Ninja Sushi',
    image: '/assets/images/restaurants/sushi.png',
    timeRange: '20-40',
    priceRange: 40,
    categories: ['sushi'],
    featured: false,
  },
  {
    restaurantId: 'vegan-delights',
    name: 'Vegan Delights',
    image: '/assets/images/restaurants/burgers-pizza.png',
    timeRange: '25-35',
    priceRange: 18,
    categories: ['salad'],
    featured: false,
  },
  {
    restaurantId: 'bbq-barn',
    name: 'BBQ Barn',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '45-60',
    priceRange: 38,
    categories: ['pasta'],
    featured: true,
  },
  {
    restaurantId: 'the-dessert-den',
    name: 'The Dessert Den',
    image: '/assets/images/restaurants/burgers-pizza.png',
    timeRange: '15-25',
    priceRange: 15,
    categories: ['desserts'],
    featured: false,
  },
  {
    restaurantId: 'pasta-palace',
    name: 'Pasta Palace',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '30-45',
    priceRange: 28,
    categories: ['pizza', 'pasta'],
    featured: true,
  },
  {
    restaurantId: 'green-gourmet',
    name: 'Green Gourmet',
    image: '/assets/images/restaurants/burgers-pizza.png',
    timeRange: '20-30',
    priceRange: 20,
    categories: ['salad'],
    featured: true,
  },
  {
    restaurantId: 'burger-hub',
    name: 'Burger Hub',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    timeRange: '25-35',
    priceRange: 22,
    categories: ['burger'],
    featured: false,
  },
  {
    restaurantId: 'urban-pizza',
    name: 'Urban Pizza',
    image: '/assets/images/restaurants/burgers-pizza.png',
    timeRange: '30-50',
    priceRange: 30,
    categories: ['pizza'],
    featured: false,
  },
  {
    restaurantId: 'midnight-bites',
    name: 'Midnight Bites',
    image: '/assets/images/restaurants/sushi.png',
    timeRange: '15-25',
    priceRange: 27,
    categories: ['burger', 'desserts'],
    featured: true,
  },
  {
    restaurantId: 'dragon-wok',
    name: 'Dragon Wok',
    image: '/assets/images/restaurants/sushi.png',
    timeRange: '35-50',
    priceRange: 35,
    categories: ['sushi', 'pasta'],
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
        <div className='mt-10 grid grid-cols-3 gap-3 mb-10 md:flex md:gap-4 md:overflow-x-auto md:pb-6 md:mb-5'>
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
                hasItems={restaurant.hasItems}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
