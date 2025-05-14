import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/delivery-app'

// Track connection status
let isConnected = false

/**
 * Connect to MongoDB
 * Using cached connection to prevent multiple connections
 */
export const connectToDatabase = async () => {
  if (isConnected) {
    return
  }

  try {
    const db = await mongoose.connect(MONGODB_URI)
    isConnected = !!db.connections[0].readyState
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}
