// store/cart.store.ts

import { Product } from '@/model/product';
import { create } from 'zustand';

export interface CartState {
  list: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  list: [],
  addToCart: (productToAdd: Product) => {
    set(state => ({
      list: [...state.list, productToAdd]
    }))
  },
  removeFromCart: (productToRemove: Product) => {
    set(state => ({
      list: state.list.filter(p => p.id !== productToRemove.id)
    }))

  },
  clearCart: () => {
    set(state => ({ list: [] }))},
}))

// selectors
export const selectCartItems = (state: CartState) => state.list
export const selectTotalItems = (state: CartState) => state.list.length
export const selectTotalCost = (state: CartState) => state.list.reduce((acc, item) => acc + item.cost, 0);
export const selectIsCartEmtpy = (state: CartState) => state.list.length === 0

// actions
export const addToCartAction = (state: CartState) => state.addToCart
export const removeFromCartAction = (state: CartState) => state.removeFromCart
export const clearCartAction = (state: CartState) => state.clearCart
