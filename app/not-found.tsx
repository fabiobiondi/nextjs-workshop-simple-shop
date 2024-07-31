import Image from 'next/image';
import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = headers()
  return (
    <div
      className="main-page text-center flex flex-col justify-center items-center h-full gap-4"
    >

      <Image src="/logo-sad.png" alt="logo sad" width={300} height={300} />

      <h1 className="text-5xl">Page Not Found</h1>
      <Link href="/">Back to Home</Link>


    </div>
  )
}
