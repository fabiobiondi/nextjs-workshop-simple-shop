import { Product } from '@/model/product';

export async function getProducts(limit?: number): Promise<Product[]> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?_limit=${limit || ''}`,
    {
      //  cache: 'force-cache',
      //  cache: 'force-cache',
      // cache: 'no-store',
      /*next: { revalidate: 5 }*/
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}
