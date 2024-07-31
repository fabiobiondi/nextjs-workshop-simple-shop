// url: http://localhost:3000/api/get-products

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const req = await fetch('https://jsonplaceholder.typicode.com/users')
  const res = await req.json();
  return NextResponse.json(res, { status: 200 })
}
