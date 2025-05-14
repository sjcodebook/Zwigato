'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const excludeRoutes = ['/login', '/register']

const menuItems = [
  { name: 'Restaurants', href: '#' },
  { name: 'Deals', href: '#' },
  { name: 'My orders', href: '#' },
]

const Logo = () => (
  <div className='flex items-center'>
    <Link href='/'>
      <Image src='/assets/svg/logo.svg' alt='Logo' width={79} height={40} />
    </Link>
  </div>
)

const SearchBar = ({
  iconPosition = 'right',
  classes = '',
}: {
  iconPosition?: 'left' | 'right'
  classes?: string
}) => (
  <div className={cn('relative items-center w-full', classes)}>
    <Input
      type='text'
      placeholder='Search'
      className={cn(
        iconPosition === 'left' ? 'pl-10 pr-4' : 'pl-4 pr-10',
        'py-2 bg-gray-100 border-transparent focus:border-transparent focus:ring-0 rounded-lg h-10 w-full text-sm placeholder-gray-500'
      )}
    />
    <div
      className={`absolute ${
        iconPosition === 'left' ? 'left-3' : 'right-3'
      } top-1/2 -translate-y-1/2 text-gray-400`}>
      <Search className='h-4 w-4' />
    </div>
  </div>
)

const DesktopNav = () => (
  <div className='hidden lg:flex items-center space-x-3.5 min-w-fit'>
    <nav className='flex items-center space-x-6'>
      {menuItems.map((item, i) => (
        <div key={item.name} className='flex items-center'>
          {i === menuItems.length - 1 && <div key={i} className='h-8 w-px bg-[#EDEEF2] mr-5' />}
          <Link
            key={item.name}
            href={item.href}
            className='text-sm font-bold tracking-[0.1px] text-neutral-700 hover:text-[#4E60FF]'>
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
    <Link href='/cart'>
      <div className='relative h-12 w-12 ml-3'>
        <button className='p-3 bg-[#EEF1FF] rounded-xl cursor-pointer'>
          <ShoppingBag className='h-5 w-5 text-[#4E60FF]' />
          <span className='absolute -top-1.25 -right-0.5 h-5 w-5 flex items-center justify-center text-[10px] font-medium text-white bg-[#4E60FF] rounded-full'>
            4
          </span>
        </button>
      </div>
    </Link>
    <div className='h-11 w-11 rounded-xl overflow-hidden border border-gray-200 p-0.25'>
      <Image
        src='/assets/images/avatar.jpg'
        alt='User profile'
        width={48}
        height={48}
        className='object-cover rounded-xl'
      />
    </div>
  </div>
)

const MobileNav = ({
  isOpen,
  onToggle,
  onLinkClick,
}: {
  isOpen: boolean
  onToggle: () => void
  onLinkClick: () => void
}) => (
  <>
    <div className='flex items-center gap-3 lg:hidden'>
      <Link href='/cart'>
        <div className='relative h-12 w-12 ml-3'>
          <button className='p-3 bg-[#EEF1FF] rounded-lg'>
            <ShoppingBag className='h-5 w-5 text-[#4E60FF]' />
            <span className='absolute -top-1.25 -right-0.5 h-5 w-5 flex items-center justify-center text-[10px] font-medium text-white bg-[#4E60FF] rounded-full'>
              4
            </span>
          </button>
        </div>
      </Link>
      <div className='h-11 w-11 rounded-xl overflow-hidden border border-gray-200 p-0.25'>
        <Image
          src='/assets/images/avatar.jpg'
          alt='User profile'
          width={48}
          height={48}
          className='object-cover rounded-xl'
        />
      </div>
      <div className='h-8 w-px bg-[#EDEEF2] mx-2 ' />
      <button
        className='h-12 w-12 p-2 rounded-xl bg-[#EDEEF2] hover:bg-gray-200 flex items-center justify-center'
        onClick={onToggle}>
        {isOpen ? (
          <X className='h-4 w-4 text-[#83859C]' />
        ) : (
          <Menu className='h-4 w-4 text-[#83859C]' />
        )}
      </button>
    </div>
    <div
      className={`
        lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t
        transition-all duration-300 ease-in-out transform
        ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }
      `}>
      <div className='px-4 py-5 space-y-4'>
        <SearchBar iconPosition='left' />
        <nav className='flex flex-col space-y-1'>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='block px-3 py-2.5 rounded-md text-base font-medium text-neutral-700 hover:bg-gray-100 hover:text-[#4E60FF]'
              onClick={onLinkClick}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </>
)

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = usePathname()
  const isExcludedRoute = excludeRoutes.some((route) => pathname.startsWith(route))

  if (isExcludedRoute) {
    return null
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className='py-5 px-4 md:px-6 lg:px-10 border-b bg-white relative'>
      <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-12 w-full'>
          <Logo />
          <SearchBar classes='max-w-[224px] w-full hidden lg:flex' />
        </div>
        <MobileNav
          isOpen={isMobileMenuOpen}
          onToggle={toggleMobileMenu}
          onLinkClick={handleLinkClick}
        />
        <DesktopNav />
      </div>
    </header>
  )
}
