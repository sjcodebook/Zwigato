import { unauthenticatedAction } from '@/lib/safe-actions'
import { getAllCategoriesUseCase } from '@/use-cases/categories'
import { getAllRestaurantsUseCase } from '@/use-cases/restaurants'

export const getAllCategoriesAction = unauthenticatedAction
  .createServerAction()
  .handler(async () => {
    try {
      const categories = await getAllCategoriesUseCase()
      return { success: true, data: categories, error: null }
    } catch (error) {
      return { success: false, message: 'Failed to get categories.', error }
    }
  })

export const getAllRestaurantsAction = unauthenticatedAction
  .createServerAction()
  .handler(async () => {
    try {
      const restaurants = await getAllRestaurantsUseCase()
      return { success: true, data: restaurants, error: null }
    } catch (error) {
      return { success: false, message: 'Failed to get restaurants.', error }
    }
  })
