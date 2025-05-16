import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
  id: number
  name: string
  image: string
  price: number
  quantity: number
  restaurant: string
}

interface CartState {
  items: CartItem[]
  restaurant?: string
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateItemQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      restaurant: undefined,

      addItem: (item) => {
        const { items, restaurant } = get()
        // If selecting a new restaurant, reset cart
        if (restaurant && restaurant !== item.restaurant) {
          set({ items: [item], restaurant: item.restaurant })
        } else {
          const existing = items.find((i) => i.id === item.id)
          if (existing) {
            // Update quantity
            set({
              items: items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            })
          } else {
            set({
              items: [...items, item],
              restaurant: item.restaurant,
            })
          }
        }
      },

      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((i) => i.id !== id) }))
      },

      updateItemQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, quantity } : i))
            .filter((i) => i.quantity > 0),
        }))
      },

      clearCart: () => {
        set({ items: [], restaurant: undefined })
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
