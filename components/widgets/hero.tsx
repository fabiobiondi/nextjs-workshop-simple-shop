import Image from 'next/image';
import Link from 'next/link';

export default function Hero () {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          width={1412/3}
          height={1892/3}
          alt="Logo Fb"
          src="/logo-fb.png"
          className="max-w-sm rounded-lg "/>
        <div>
          <h1 className="text-5xl font-bold">Geek Gadgets</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link href="/shop" className="btn btn-secondary">Go to Shop</Link>
        </div>
      </div>
    </div>

  )
}

