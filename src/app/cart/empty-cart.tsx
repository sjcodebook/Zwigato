'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function EmptyCart() {
  return (
    <div className='text-center py-10'>
      <ShoppingCart className='mx-auto h-16 w-16 text-gray-400' strokeWidth={1.5} />
      <h2 className='mt-2 text-lg font-medium text-gray-900'>Your cart is empty</h2>
      <p className='mt-1 text-sm text-gray-500'>
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <div className='mt-6'>
        <Link
          href='/'
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4E60FF] hover:bg-[#3858d3]'>
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
