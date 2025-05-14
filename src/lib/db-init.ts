import { connectToDatabase } from '@/lib/db'

// This initializes the database connection
// Import this at the top level of your server components or API routes
export const initializeDatabase = async () => {
  try {
    await connectToDatabase()
  } catch (error) {
    console.error('Failed to initialize database:', error)
    throw new Error('Failed to initialize database connection')
  }
}
