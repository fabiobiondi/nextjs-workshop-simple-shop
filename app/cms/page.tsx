import { AddForm } from '@/app/cms/_components/AddForm';
import { DeleteForm } from '@/app/cms/_components/DeleteForm';
import { getProducts } from '@/services/api/get-products';
import Image from 'next/image';

export default async function Home() {
  let products = await getProducts()

  return (
    <main>
      <h1 className="widget-title">TODO LIST with SERVER ACTIONS</h1>

      <AddForm />

      <ul>
        {
          products.reverse().map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center gap-12 my-3 pr-3 bg-slate-900"
            >
              <div className="flex gap-12 items-center ">
                {
                  product.image && (
                    <Image
                      width={100}
                      height={100}
                      src={product.image}
                      alt={product.name}
                    />
                  )
                }

                {product.name}
              </div>
              <DeleteForm product={product} />
            </li>
          ))
        }
      </ul>


    </main>
  );
}
