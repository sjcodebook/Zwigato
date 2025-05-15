import dbConnect from '@/lib/db'

import Restaurant from '../../models/Restaurant'

export async function getAllRestaurants() {
  await dbConnect()
  const restaurants = await Restaurant.find({})
  return restaurants
}
