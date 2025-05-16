import mongoose from 'mongoose'

export interface ICategory extends Document {
  catId: string
  icon: string
  label: string
}

const categorySchema = new mongoose.Schema<ICategory>(
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

export default mongoose?.models?.categories ||
  mongoose?.model<ICategory>('categories', categorySchema)
