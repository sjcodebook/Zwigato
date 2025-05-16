import NextAuth, { DefaultSession } from 'next-auth'

import authConfig from '@/lib/auth.config'

interface AuthorizedUser {
  id: string
  email: string
  name: string
}

type SessionUser = DefaultSession['user'] & {
  id: string
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authorizedUser = user as AuthorizedUser
        token.id = authorizedUser.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        if (token.id) {
          const sessionUser = session.user as SessionUser
          sessionUser.id = token.id as string
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  trustHost: true,
  ...authConfig,
})
