'use client'

import { useState } from 'react'

import OrderSummary from './summary-card'
import CartItem from './cart-item'
import EmptyCart from './empty-cart'

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
          <EmptyCart />
        ) : (
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='lg:w-2/3 space-y-4'>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleQuantityChange={handleQuantityChange}
                  handleRemoveItem={handleRemoveItem}
                />
              ))}
            </div>
            <div className='lg:w-1/3'>
              <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
