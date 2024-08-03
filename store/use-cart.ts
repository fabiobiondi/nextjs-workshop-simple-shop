import { Product } from '@/model/product';
import { create } from 'zustand';

export interface CartState {
  list: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

const getInitialState = () => {
  const cartFromLocalStorage = localStorage.getItem("cart");
  if  (cartFromLocalStorage) {
    return JSON.parse(cartFromLocalStorage)
  }
  return []
}

const updateLocalStorage = (product: Product[]) => {
  localStorage.setItem('cart', JSON.stringify(product));
}

export const useCart = create<CartState>((set, get) => ({
  list: getInitialState(),
  addToCart: (productToAdd: Product) => {
    set(state => ({
      list: [...state.list, productToAdd]
    }))
    updateLocalStorage( get().list )
  },
  removeFromCart: (productToRemove: Product) => {
    set(state => ({
      list: state.list.filter(p => p.id !== productToRemove.id)
    }))
    updateLocalStorage( get().list )
  },
  clearCart: () => {
    set(state => ({ list: [] }))
    updateLocalStorage( get().list )
  }
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
