import bcrypt from 'bcryptjs'
import Credentials from 'next-auth/providers/credentials'

import type { NextAuthConfig } from 'next-auth'

import User from '../../models/User'

import dbConnect from '@/lib/db'

interface AuthorizedUser {
  id: string
  email: string
  name: string
}

const authConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<AuthorizedUser | null> {
        if (!credentials?.email || !credentials.password) {
          return null
        }
        await dbConnect()
        const user = await User.findOne({ email: credentials.email }).select('+password +name')

        if (!user || !user.password) {
          return null
        }

        const isPasswordMatch = await bcrypt.compare(credentials.password as string, user.password)

        if (!isPasswordMatch) {
          return null
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
} satisfies NextAuthConfig

export default authConfig
