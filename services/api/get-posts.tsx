import { Post } from '@/model/post';

export async function getPosts(): Promise<Post[]> {

  const res = await fetch(
    `https://json-server-vercel-for-tutorials.vercel.app/posts`,
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
    `https://json-server-vercel-for-tutorials.vercel.app/posts/${id}`,
    {
      //  cache: 'force-cache',
      // cache: 'no-store',
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
}
