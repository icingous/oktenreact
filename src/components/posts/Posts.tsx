import { type FC } from 'react';
import type { IPost } from '../../models/IPost';
import Post from './Post';

interface IPostsProps {
  posts: IPost[];
}

const Posts: FC<IPostsProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
