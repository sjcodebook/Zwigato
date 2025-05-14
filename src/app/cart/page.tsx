'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'

const initialCartItems = [
  {
    id: 1,
    name: 'Royal Sushi Set',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    price: 32.0,
    quantity: 1,
    restaurant: 'Royal Sushi House',
  },
  {
    id: 2,
    name: 'Classic Burger',
    image: '/assets/images/restaurants/royal-sushi-house.png',
    price: 12.5,
    quantity: 2,
    restaurant: 'Burgers & Pizza',
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const handleQuantityChange = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 0 ? 5.0 : 0
  const total = subtotal + deliveryFee

  return (
    <div className='min-h-screen w-full max-w-7xl mx-auto bg-white'>
      <main className='py-6 md:py-8 px-4 md:px-6 xl:px-0'>
        <h1 className='text-2xl md:text-3xl font-bold text-neutral-800 mb-6 md:mb-8'>My Cart</h1>

        {cartItems.length === 0 ? (
          <div className='text-center py-10'>
            <ShoppingCart className='mx-auto h-16 w-16 text-gray-400' strokeWidth={1.5} />
            <h2 className='mt-2 text-lg font-medium text-gray-900'>Your cart is empty</h2>
            <p className='mt-1 text-sm text-gray-500'>
              Looks like you haven&apos;t added anything to your cart yet.
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
                        className='p-1.5 md:p-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center'
                        disabled={item.quantity <= 1}>
                        <Minus className='h-4 w-4' />
                      </button>
                      <span className='px-2 md:px-3 text-sm md:text-base font-medium text-neutral-800 w-8 text-center'>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className='p-1.5 md:p-2 text-gray-600 hover:bg-gray-100 flex items-center justify-center'>
                        <Plus className='h-4 w-4' />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className='text-xs text-red-500 hover:text-red-700 flex items-center gap-1'>
                      <Trash2 className='h-4 w-4' /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
