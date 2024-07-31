import Image from 'next/image';
import Link from 'next/link'

export default async function NotFound() {
  return (
    <div
      className="main-page text-center flex flex-col justify-center items-center h-full gap-4"
    >
      <Image src="/logo-sad.png" alt="logo sad" width={300} height={300} />

      <h1 className="text-5xl">Page Not Found</h1>
      <Link href="/" className="btn btn-secondary">Back to Home</Link>
    </div>
  )
}
