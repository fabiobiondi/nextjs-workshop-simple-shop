// Example Static Routes

import Divider from '@/components/utilities/divider';
import { getPost, getPosts } from '@/services/api/get-posts';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const products = await getPosts()

  return products.map(p => ({
    id: p.id.toString()
  }))
}

export default async function BlogPost({ params }: {params: { id: string }}) {
  const post = await getPost(+params.id);

  return (
    <div className="my-12">
      <Image src={post.image} alt={post.title} width={300} height={300} />
      <h1 className="widget-title">{post.title}</h1>
      <p>{post.description}</p>

      <Divider />

      <Link href="/blog" className="btn btn-secondary">Back to Blog </Link>
      <Divider />

      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}
