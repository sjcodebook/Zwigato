import { connectToDatabase } from '@/lib/db'

export const initializeDatabase = async () => {
  try {
    await connectToDatabase()
  } catch (error) {
    console.error('Failed to initialize database:', error)
    throw new Error('Failed to initialize database connection')
  }
}
