import NextAuth, { AuthOptions, DefaultSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../../../models/User'
import dbConnect from '@/lib/db'
import bcrypt from 'bcryptjs'

interface AuthorizedUser {
  id: string
  email: string
  name: string
  role: string
}

type SessionUser = DefaultSession['user'] & {
  id: string
  role: string
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
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
        const user = await User.findOne({ email: credentials.email }).select(
          '+password +name +role'
        )

        if (!user || !user.password) {
          return null
        }

        const isPasswordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordMatch) {
          return null
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authorizedUser = user as AuthorizedUser
        token.id = authorizedUser.id
        token.role = authorizedUser.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        if (typeof token.id === 'string' && typeof token.role === 'string') {
          const sessionUser = session.user as SessionUser
          sessionUser.id = token.id
          sessionUser.role = token.role
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
