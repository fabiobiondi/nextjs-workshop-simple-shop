"use server";
import { z } from "zod"; //  npm i zod

export async function sendMessageAction(
  prevState: { message: string, status: number},
  formData: FormData
) {
  const schema = z.object({
    email: z.string().min(3),
  });
  const parse = schema.safeParse({
    email: formData.get("email"),
    //email: z.string().email()
  });


  if (!parse.success) {
    return { message: "validation failed", status: 404 };
  }
  const data = parse.data;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/send`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': '123'
        // Add other headers as needed, like authorization tokens
      },
      // body: JSON.stringify({ email: data.email }),
    });

    if (!response.ok) {
      return { message: "Failed to send email #1", status: 404  };
    }

    // revalidatePath("/");
    return { message: `Email sent to ${data.email}`, status: 200 }

  } catch(error) {
    // network problems, DNS lookup failures, ...
    return { message: "Failed to sent email #2", status: 404  };
  }

}
