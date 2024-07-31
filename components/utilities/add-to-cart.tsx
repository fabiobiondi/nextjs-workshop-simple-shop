'use client';

import { Product } from '@/model/product';
import { addToCartAction, useCart } from '@/store/use-cart';

interface AddToCartProps {
  product: Product
}

export default function AddToCart (props: AddToCartProps) {
  const addToCart = useCart(addToCartAction);

  return (
    <button
      className="btn btn-secondary"
      onClick={() => addToCart(props.product)}
    >Add to Cart</button>
  )
}

