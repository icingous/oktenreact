import { useEffect, useState, type FC } from 'react';
import type IUserService from '../../models/IUserService';
import type IPost from '../../models/IPost';
import Post from './Post';

interface IPostProps {
  service: IUserService;
}

const Posts: FC<IPostProps> = ({ service }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    service.getPosts().then((res) => setPosts(res));
  }, [service]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
