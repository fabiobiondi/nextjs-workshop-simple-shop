"use server";

import { z } from 'zod';

export async function sendMessageAction(
  prevState: { serverMessage: string, status: number},
  formData: FormData
) {

  const email = formData.get("email");
  const message = formData.get("message");

  const schema = z.object({
    email: z.string().email(),
    message: z.string().min(3),
  });
  const parse = schema.safeParse({ email, message });

  if (!parse.success) {
    return { serverMessage: "validation failed", status: 400 };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': '123'
        // Add other headers as needed, like authorization tokens
      },
      body: JSON.stringify({ email, message }),
    });
    console.log(email, message)

    if (!response.ok) {
      return { serverMessage: "Failed to send email #1", status: 500  };
    }

    console.log('sent', email, message)
    // revalidatePath("/");
    return { serverMessage: `Email sent to ${email}`, status: 200 }

  } catch(error) {
    // network problems, DNS lookup failures, ...
    return { serverMessage: "Failed to sent email #2", status: 500  };
  }
}
