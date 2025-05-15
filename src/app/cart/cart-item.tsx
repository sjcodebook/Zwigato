'use client'

import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'

interface CartItemProps {
  item: {
    id: number
    name: string
    image: string
    price: number
    quantity: number
    restaurant: string
  }
  handleQuantityChange: (id: number, amount: number) => void
  handleRemoveItem: (id: number) => void
}

export default function CartItem({ item, handleQuantityChange, handleRemoveItem }: CartItemProps) {
  return (
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
          sizes='(min-width: 768px) 6rem, 5rem'
        />
      </div>
      <div className='flex-grow'>
        <h3 className='text-base md:text-lg font-medium text-neutral-800'>{item.name}</h3>
        <p className='text-xs md:text-sm text-gray-500 mb-1'>{item.restaurant}</p>
        <p className='text-sm md:text-base font-semibold text-[#4E60FF]'>
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
  )
}
