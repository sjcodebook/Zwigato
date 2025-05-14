'use client'

import { useState } from 'react'
import { Menu, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  const excludeRoutes = ['/login', '/register']
  const isExcludedRoute = excludeRoutes.some((route) => pathname.startsWith(route))

  if (isExcludedRoute) {
    return null
  }

  return (
    <header className='w-full border-b bg-white px-4 py-3 shadow-sm'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4'>
        {/* Left: Logo + Search */}
        <div className='flex items-center gap-4'>
          <div className='text-xl font-bold leading-none'>
            Food <span className='text-primary'>delivery</span>
          </div>

          {/* Search bar (hidden on small screens) */}
          <div className='hidden md:flex'>
            <div className='relative'>
              <Input placeholder='Search' className='pl-10 rounded-full bg-muted w-[200px]' />
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
            </div>
          </div>
        </div>

        {/* Center Nav Links - Hidden on mobile */}
        <nav className='hidden md:flex gap-6 text-sm font-medium text-muted-foreground'>
          <a href='#' className='hover:text-primary'>
            Restaurants
          </a>
          <a href='#' className='hover:text-primary'>
            Deals
          </a>
          <a href='#' className='hover:text-primary'>
            My orders
          </a>
        </nav>

        {/* Right: Icons */}
        <div className='flex items-center gap-4'>
          {/* Orders Badge Icon */}
          <div className='relative rounded-full bg-muted p-2'>
            <svg width='20' height='20' fill='none' viewBox='0 0 24 24'>
              <path
                d='M7 4h10v2H7zM5 8h14v2H5zM3 12h18v2H3zM5 16h14v2H5zM7 20h10v2H7z'
                fill='currentColor'
              />
            </svg>
            <span className='absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white'>
              4
            </span>
          </div>

          {/* User Avatar */}
          <Avatar className='h-8 w-8 border border-muted'>
            <AvatarImage src='/avatar.png' alt='User' />
          </Avatar>

          {/* Mobile Menu Icon */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className='h-5 w-5' />
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden mt-2 space-y-2 text-sm font-medium text-muted-foreground px-4'>
          <a href='#' className='block hover:text-primary'>
            Restaurants
          </a>
          <a href='#' className='block hover:text-primary'>
            Deals
          </a>
          <a href='#' className='block hover:text-primary'>
            My orders
          </a>
        </div>
      )}
    </header>
  )
}
