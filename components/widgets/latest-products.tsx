import ErrorMessage from '@/components/utilities/error-message';
import ProductCard from '@/components/utilities/product-card';
import { getProducts } from '@/services/api/get-products';
import Link from 'next/link';

export default async function LatestProducts () {
  const products = await getProducts(4);

  if (!products.length) {
    return <ErrorMessage />
  }

  return (
    <>
      {/*LATEST PRODUCTS*/}
      <div className="flex justify-between items-center">
        <h1 className="widget-title">LATEST PRODUCTS</h1>
        <Link href="/shop" className="btn btn-neutral btn-sm">Go to Shop</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {
          products?.map(product =>
            <ProductCard product={product} key={product.id} />
          )
        }

      </div>

    </>
  )
}

