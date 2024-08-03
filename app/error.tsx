'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div
      className="main-page text-center flex flex-col justify-center items-center h-full gap-4"
    >
      <Image src="/logo-sad.png" alt="logo sad" width={300} height={300}/>
      <h1 className="widget-title">Something went wrong!</h1>

      <button className="btn btn-secondary" onClick={() => reset()}>Try again</button>
      <Link href="/" className="btn btn-secondary">Back to Home</Link>

    </div>
  )
}

