// url: http://localhost:3000/api/demo?name=fabio
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  console.log(url.search)
  const params = new URLSearchParams(url.searchParams)
  const name = params.get('name');
  return NextResponse.json({ name: name?.toUpperCase() }, { status: 200 })
}
