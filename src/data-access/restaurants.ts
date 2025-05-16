'use server'

import dbConnect from '@/lib/db'

import Restaurant, { RestaurantSchemaType } from '../../models/Restaurant'

export async function getAllRestaurants() {
  await dbConnect()
  const rawRestaurants = await Restaurant.find<RestaurantSchemaType>({}).lean()
  const restaurants = rawRestaurants.map((doc) => ({
    restaurantId: doc.restaurantId,
    name: doc.name,
    image: doc.image,
    timeRange: doc.timeRange,
    priceRange: doc.priceRange,
    categories: doc.categories,
    featured: doc.featured,
    hasItems: doc.hasItems,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  }))
  return restaurants
}
