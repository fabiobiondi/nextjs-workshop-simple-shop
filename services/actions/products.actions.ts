"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function addProduct(
  prevState: {
    message: string,
    status: number
  },
  formData: FormData,
) {
  const schema = z.object({
    name: z.string().min(2),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
  });


  if (!parse.success) {
    return { message: "Input is not valid!", status: 0 };
  }

  const data = parse.data;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // cache: 'no-store',
      body: JSON.stringify({ name: data.name }),
    });

    if (!response.ok) {
      return { message: "Failed to create todo #1", status: 404  };
    }

    revalidatePath("/");
    return { message: `Added todo ${data.name}`, status: 200 }

  } catch(error) {
    return { message: "Failed to create todo #2", status: 404  };
  }

}

export async function deleteProduct(
  prevState: {
    message: string,
    status: number
  },
  formData: FormData,
) {
  const schema = z.object({
    id: z.string().min(1),
    // todo: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    // todo: formData.get("todo"),
  });

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return { message: "Failed to create todo #1", status: 404  };
    }

    revalidatePath("/");
    return { message: `Deleted todo ${data.id}`, status: 200  }

  } catch(error) {
    return { message: "Failed to delete todo", status: 404  };
  }
}


