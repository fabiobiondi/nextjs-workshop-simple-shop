import ErrorMessage from '@/components/utilities/error-message';
import { getPosts } from '@/services/api/get-posts';
import Image from 'next/image';

export const dynamic = 'force-static'

export default async function Blog () {
  const posts = await getPosts();

  if (!posts.length) {
    return <ErrorMessage showBackHomeButton />
  }

  return <div>

    <h1 className="widget-title">BLOG</h1>
      {
        posts?.map(post =>
          <a
            href={`/blog/${post.id}`}
            key={post.id}
            className="flex items-center gap-6 hover:bg-gray-900 rounded-xl p-12 cursor-pointer"
          >
            <Image src={post.image} alt={post.title} width={200} height={200} />

            <h2 className="text-4xl ">
              {post.title}
            </h2>
          </a>
        )
      }
  </div>
}

