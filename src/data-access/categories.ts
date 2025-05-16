'use server'

import dbConnect from '@/lib/db'
import Category, { CategorySchemaType } from '../../models/Category'

export async function getAllCategories() {
  await dbConnect()
  const rawCategories = await Category.find<CategorySchemaType>({}).lean()
  const categories = rawCategories.map((doc) => ({
    catId: doc.catId,
    icon: doc.icon,
    label: doc.label,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  }))
  return categories
}
