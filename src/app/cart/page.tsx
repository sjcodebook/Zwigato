'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input' // Assuming this might be used in header or future search
import { Button } from '@/components/ui/button' // For checkout button
import { useState } from 'react'

// Placeholder cart item data
const initialCartItems = [
  {
    id: 1,
    name: 'Royal Sushi Set',
    image: '/sushi-restaurant.jpg', // Replace with actual item image
    price: 32.0,
    quantity: 1,
    restaurant: 'Royal Sushi House',
  },
  {
    id: 2,
    name: 'Classic Burger',
    image: '/burger-pizza.jpg', // Replace with actual item image
    price: 12.5,
    quantity: 2,
    restaurant: 'Burgers & Pizza',
  },
]

// Icons
const PlusIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <line x1='12' y1='5' x2='12' y2='19'></line>
    <line x1='5' y1='12' x2='19' y2='12'></line>
  </svg>
)

const MinusIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <line x1='5' y1='12' x2='19' y2='12'></line>
  </svg>
)

const TrashIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <polyline points='3 6 5 6 21 6'></polyline>
    <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
    <line x1='10' y1='11' x2='10' y2='17'></line>
    <line x1='14' y1='11' x2='14' y2='17'></line>
  </svg>
)

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const handleQuantityChange = (id: number, amount: number) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
          )
          .filter((item) => item.quantity > 0) // Optionally remove if quantity becomes 0
    )
  }

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 0 ? 5.0 : 0 // Example delivery fee
  const total = subtotal + deliveryFee

  return (
    <div className='min-h-screen bg-white'>
      {/* Header - Reusing similar structure from Home page */}
      <header className='py-3 px-4 md:py-3 md:px-10 flex items-center justify-between border-b'>
        <Link href='/' className='flex items-center gap-1'>
          <span className='text-lg font-bold text-neutral-800'>Food</span>
          <span className='text-lg font-medium text-[#4263EB]'>delivery</span>
        </Link>
        <div className='flex items-center gap-3'>
          {/* Desktop Navigation (Simplified for cart context) */}
          <nav className='hidden md:flex items-center mr-8'>
            <Link href='/' className='text-neutral-800 hover:text-neutral-900 px-4'>
              Restaurants
            </Link>
            <Link href='/#deals' className='text-neutral-800 hover:text-neutral-900 px-4'>
              Deals
            </Link>
          </nav>
          {/* Profile Image - Assuming user is logged in */}
          <div className='h-8 w-8 md:h-10 md:w-10 rounded-full overflow-hidden'>
            <Image
              src='/profile-placeholder.jpg'
              alt='User profile'
              width={40}
              height={40}
              className='object-cover'
            />
          </div>
          {/* Mobile Menu Button (Optional, can be expanded) */}
          <button className='p-2 rounded-full bg-gray-100 md:hidden'>
            <svg
              className='h-5 w-5 text-gray-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className='py-6 px-4 md:py-8 md:px-10'>
        <h1 className='text-2xl md:text-3xl font-bold text-neutral-800 mb-6 md:mb-8'>My Cart</h1>

        {cartItems.length === 0 ? (
          <div className='text-center py-10'>
            <svg
              className='mx-auto h-12 w-12 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path
                vectorEffect='non-scaling-stroke'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <h2 className='mt-2 text-lg font-medium text-gray-900'>Your cart is empty</h2>
            <p className='mt-1 text-sm text-gray-500'>
              Looks like you haven't added anything to your cart yet.
            </p>
            <div className='mt-6'>
              <Link
                href='/'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4263EB] hover:bg-[#3858d3]'>
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Cart Items List */}
            <div className='lg:w-2/3 space-y-4'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='flex items-start gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm'>
                  <div className='w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden flex-shrink-0'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className='object-cover w-full h-full'
                    />
                  </div>
                  <div className='flex-grow'>
                    <h3 className='text-base md:text-lg font-medium text-neutral-800'>
                      {item.name}
                    </h3>
                    <p className='text-xs md:text-sm text-gray-500 mb-1'>{item.restaurant}</p>
                    <p className='text-sm md:text-base font-semibold text-[#4263EB]'>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className='flex flex-col items-end gap-2 ml-auto'>
                    <div className='flex items-center border border-gray-300 rounded-md'>
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className='p-1.5 md:p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50'
                        disabled={item.quantity <= 1}>
                        <MinusIcon />
                      </button>
                      <span className='px-2 md:px-3 text-sm md:text-base font-medium text-neutral-800 w-8 text-center'>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className='p-1.5 md:p-2 text-gray-600 hover:bg-gray-100'>
                        <PlusIcon />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className='text-xs text-red-500 hover:text-red-700 flex items-center gap-1'>
                      <TrashIcon /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className='lg:w-1/3'>
              <div className='bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm border border-gray-200'>
                <h2 className='text-lg font-semibold text-neutral-800 mb-4'>Order Summary</h2>
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm text-neutral-700'>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-sm text-neutral-700'>
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <hr className='my-2 border-gray-200' />
                  <div className='flex justify-between text-base font-semibold text-neutral-800'>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button className='w-full mt-6 bg-[#4263EB] hover:bg-[#3858d3] h-11 text-base'>
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
