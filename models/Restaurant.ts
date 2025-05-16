import { InferSchemaType, Schema, model, models } from 'mongoose'

const RestaurantSchema = new Schema(
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

export type RestaurantSchemaType = InferSchemaType<typeof RestaurantSchema>

const Restaurant =
  models.restaurants || model<RestaurantSchemaType>('restaurants', RestaurantSchema)

export default Restaurant
