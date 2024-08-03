import { Post } from '@/model/post';

export async function getPosts(): Promise<Post[]> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`,
    {
      //  cache: 'force-cache',
      // cache: 'no-store',
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
}

export async function getPost(id: number): Promise<Post> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${id}`,
    {
      //  cache: 'force-cache',
      // cache: 'no-store',
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
}
