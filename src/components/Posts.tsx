import { useEffect, useState } from 'react';
import { getPosts } from '../services/api.service';
import type { IPost } from '../models/IPost';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className='w-full p-5'>
      <section className='max-w-2xl mx-auto flex flex-col'>
        <h2 className=' pt-3 pb-5 font-bold text-4xl'>Posts</h2>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Posts;
