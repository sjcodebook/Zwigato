import NextAuth, { AuthOptions, DefaultSession } from 'next-auth'

import { env } from '@/env'
import authConfig from '@/lib/auth.config'

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

const authOptions: AuthOptions = {
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
  secret: env.NEXTAUTH_SECRET,
  ...authConfig,
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
