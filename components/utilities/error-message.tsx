import Image from 'next/image';
import Link from 'next/link';

interface ErrorMessage {
  showBackHomeButton?: boolean;
}

export default function ErrorMessage (props: ErrorMessage) {
  return (
    <div
      className="main-page text-center flex flex-col justify-center items-center h-full gap-4"
    >

      <Image src="/logo-sad.png" alt="logo sad" width={100} height={100}/>

      <h1 className="text-5xl">Fetch Error</h1>

      {
        props.showBackHomeButton &&
          <Link href="/public" className="btn btn-secondary">Back to Home</Link>
      }


    </div>
  )
}

