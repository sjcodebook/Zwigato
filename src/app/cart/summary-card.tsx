'use client'

import { Button } from '@/components/ui/button'

interface OrderSummaryProps {
  subtotal: number
  deliveryFee: number
  total: number
  onCheckout?: () => void
}

export default function OrderSummary({
  subtotal,
  deliveryFee,
  total,
  onCheckout = () => {},
}: OrderSummaryProps) {
  return (
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
      <Button
        className='w-full mt-6 bg-[#4E60FF] hover:bg-[#3858d3] h-11 text-base'
        onClick={onCheckout}>
        Proceed to Checkout
      </Button>
    </div>
  )
}
