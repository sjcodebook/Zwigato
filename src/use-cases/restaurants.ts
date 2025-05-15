import { getAllRestaurants } from '@/data-access/restaurants'

export async function getAllRestaurantsUseCase() {
  const restaurants = await getAllRestaurants()
  return restaurants
}
