"use client";

import { createTodo } from '@/services/actions/products.actions';
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
  status: 0
};

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary"
      aria-disabled={pending}
    >
      {pending ? 'loading...' : 'ADD'}
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>
      { state.status === 404 && <div className="alert alert-error">Server error</div>}
      <div className="flex items-center gap-3 my-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Add Product Name"
          className="input input-bordered input-lg"
        />
        <SubmitButton />
      </div>

      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  );
}
