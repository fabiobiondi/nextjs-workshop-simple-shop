import ErrorMessage from '@/components/utilities/error-message';
import ProductCard from '@/components/utilities/product-card';
import { getProducts } from '@/services/api/get-products';


export default async function Shop () {
  const products = await getProducts();

  if (!products.length) {
    return <ErrorMessage showBackHomeButton />
  }

  return <div>

    <h1 className="widget-title">SHOP</h1>
    <div className="grid grid-cols-1 md:grid-cols-3  gap-12">
      {
        products?.map(product =>
          <ProductCard product={product} key={product.id} />
        )
      }

    </div>
  </div>
}

