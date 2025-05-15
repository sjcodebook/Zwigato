import { getAllCategories } from '@/data-access/categories'

export async function getAllCategoriesUseCase() {
  const categories = await getAllCategories()
  return categories
}
