import mongoose from 'mongoose'

import { env } from '@/env'

const MONGODB_URI = env.DATABASE_URL

let isConnected = false

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
