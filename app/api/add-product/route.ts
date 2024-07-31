// url: http://localhost:3000/api/add-product
// method POST
// body: { "name": "test", "id": 18  }

export async function POST(request: Request) {

  const body = await request.json();

  // const res = await fetch('https://json-server-vercel-for-tutorials.vercel.app/products', {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    body: JSON.stringify({ ...body }),
  })

  const data = await res.json()

  return Response.json(data)
}
