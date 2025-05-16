import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface Restaurant {
  _id: string
  restaurantId: string
  name: string
  image: string
  timeRange: string
  priceRange: number
  categories: string[]
  featured: boolean
  hasItems: boolean
}

interface CartState {
  items: Restaurant[]
  addRestaurant: (r: Restaurant) => void
  removeRestaurant: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addRestaurant: (r) => {
        const { items } = get()
        // only add if not already in cart
        if (!items.find((x) => x._id === r._id)) {
          set({ items: [...items, r] })
        }
      },

      removeRestaurant: (id) => {
        set((state) => ({ items: state.items.filter((x) => x._id !== id) }))
      },

      clearCart: () => {
        set({ items: [] })
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined'
          ? window.localStorage
          : {
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            }
      ),
    }
  )
)
