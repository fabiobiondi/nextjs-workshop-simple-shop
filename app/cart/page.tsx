import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <div
      className="main-page text-center flex flex-col justify-center items-center h-full gap-4"
    >
      <Image src="/logo-fb.png" alt="logo sad" width={300} height={300}/>

      <p className="text-xl">Page not available</p>
      <h1 className="text-5xl">Build your own order process</h1>
      <Link href="/" className="btn btn-secondary">Back to Home</Link>
    </div>
  )
}

