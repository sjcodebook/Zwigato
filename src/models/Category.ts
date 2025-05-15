import mongoose, { Schema, Document, Model } from 'mongoose'

export interface ICategory extends Document {
  catId: string
  icon: string
  label: string
}

const categorySchema = new Schema<ICategory>(
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

const Category =
  (mongoose.models.Category as Model<ICategory>) ||
  mongoose.model<ICategory>('Category', categorySchema)

export default Category
