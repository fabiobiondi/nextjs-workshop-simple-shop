// Example Dynamic Route
import { getPost } from '@/services/api/get-posts';
import Image from 'next/image';

export default async function BlogPost({ params }: {params: { id: string }}) {
  const post = await getPost(+params.id);

  return (
    <div>

      <Image src={post.image} alt={post.title} width={300} height={300} />
      <h1 className="widget-title">{post.title}</h1>
      <p>{post.description}</p>

      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}
