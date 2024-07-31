// app/demo-server-actions/_components/DeleteForm.tsx

"use client";

import { Product } from '@/model/product';
import { deleteProduct } from '@/services/actions/products.actions';
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: '',
  status: 0
};

export function DeleteForm({ product }: { product: Product }) {
  const [state, formAction] = useFormState(deleteProduct, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={product.id} />
      <input type="hidden" name="text" value={product.name || ''} />

      {
        state?.status === 404 ?
          <div>Error</div> :
          <DeleteButton/>

      }
    </form>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-error btn-sm" type="submit" aria-disabled={pending}>
      {pending ? 'loading...' : 'Delete' }
    </button>
  );
}
