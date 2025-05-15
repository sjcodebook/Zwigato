import dbConnect from '@/lib/db'

import Category from '../../models/Category'

export async function getAllCategories() {
  await dbConnect()
  const categories = await Category.find({})
  return categories
}
