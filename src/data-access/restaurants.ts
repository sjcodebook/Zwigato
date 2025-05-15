import Restaurant from '../../models/Restaurant'

export async function getAllRestaurants() {
  const restaurants = await Restaurant.find({})
  return restaurants
}
