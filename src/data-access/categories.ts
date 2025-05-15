import Category from '../../models/Category'

export async function getAllCategories() {
  const categories = await Category.find({})
  return categories
}
