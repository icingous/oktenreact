import { useEffect, useState, type FC } from 'react';
import type IPost from '../../models/IPost';
import Post from './Post';
import { userService } from '../../services/api.service';
import type { IUrlProps } from '../../models/IUrlProps';

const Posts: FC<IUrlProps> = ({ url }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    userService.getPosts(url).then((res) => setPosts(res));
  }, [url]);

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
