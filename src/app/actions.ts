import { unauthenticatedAction } from '@/lib/safe-actions'
import { getAllCategoriesUseCase } from '@/use-cases/categories'

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
