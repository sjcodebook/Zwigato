import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IRestaurant extends Document {
  restaurantId: string
  name: string
  image: string
  timeRange: string
  priceRange: number
  categories: string[]
  featured: boolean
  hasItems: boolean
}

const restaurantSchema = new Schema<IRestaurant>(
  {
    restaurantId: {
      type: String,
      required: [true, 'Please provide a restaurant ID'],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Please provide an image URL'],
      trim: true,
    },
    timeRange: {
      type: String,
      required: [true, 'Please provide a time range'],
      trim: true,
    },
    priceRange: {
      type: Number,
      required: [true, 'Please provide a price range'],
    },
    categories: {
      type: [String],
      required: [true, 'Please provide at least one category'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    hasItems: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Restaurant =
  (mongoose.models.Restaurant as Model<IRestaurant>) ||
  mongoose.model<IRestaurant>('restaurants', restaurantSchema)

export default Restaurant
