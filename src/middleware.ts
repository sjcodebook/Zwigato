import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { publicRoutes, authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { env } from '@/env'

export async function middleware(req: NextRequest) {
  const { nextUrl: url } = req
  const pathname = url.pathname

  // Determine route types
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.some((route) => {
    if (route.includes('[')) {
      const regex = new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`)

      return regex.test(pathname)
    }

    return pathname === route || pathname.startsWith(`${route}/`)
  })
  const isAuthRoute = authRoutes.some((route) => {
    if (route.includes('[')) {
      const regex = new RegExp(`^${route.replace(/\[.*?\]/g, '[^/]+')}$`)

      return regex.test(pathname)
    }

    return pathname === route
  })

  // Retrieve JWT token
  const token = await getToken({ req, secret: env.AUTH_SECRET })
  const isLoggedIn = !!token

  // Allow API auth routes
  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  // Redirect logged-in users away from login/register pages
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, url))
    }

    return NextResponse.next()
  }

  // Protect other routes
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
