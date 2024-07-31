import Link from 'next/link';

export default function Footerbar () {
  return <div className="fixed bottom-0 w-full">
    <div className="flex gap-3 justify-end">
      <Link href="/about" className="btn btn-link">About</Link>
      <Link href="/blog" className="btn btn-link">Blog</Link>
      <Link href="/cms" className="btn btn-link">CMS</Link>

    </div>
  </div>
}

