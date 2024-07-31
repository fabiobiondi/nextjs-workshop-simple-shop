import AddToCart from '@/components/utilities/add-to-cart';
import { Product } from '@/model/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard (props: ProductCardProps) {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <Image
          width={400}
          height={400}
          src={props.product.image}
          alt={props.product.name}
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.product.name}</h2>
        <p>{props.product.type}</p>
        <div className="card-actions justify-end mt-4">
          <AddToCart product={props.product}/>
        </div>
      </div>
    </div>
  )
}

