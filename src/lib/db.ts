import mongoose from 'mongoose'

import { env } from '@/env'

type ConnectionObject = {
  isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    const db = await mongoose.connect(env.DATABASE_URL, {
      dbName: env.DB_NAME,
    })
    connection.isConnected = db.connections[0].readyState
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

export default dbConnect
