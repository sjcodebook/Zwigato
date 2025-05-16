import { InferSchemaType, Schema, model, models } from 'mongoose'

const CategorySchema = new Schema(
  {
    catId: {
      type: String,
      required: [true, 'Please provide a category ID'],
      unique: true,
      trim: true,
    },
    icon: {
      type: String,
      required: [true, 'Please provide an icon'],
      trim: true,
    },
    label: {
      type: String,
      required: [true, 'Please provide a label'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

export type CategorySchemaType = InferSchemaType<typeof CategorySchema>

const Category = models?.categories || model<CategorySchemaType>('categories', CategorySchema)

export default Category
