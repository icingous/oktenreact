import { useEffect, useState } from 'react';
import api from '../../services/api.service';
import type { IPost } from '../../models/IPost';
import type { IResponseBase } from '../../models/IResponseBase';
import Posts from '../../components/posts/Posts';

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    api
      .getAll<IResponseBase & { posts: IPost[] }>('/posts')
      .then((res) => setPosts(res.posts));
  }, []);

  return <Posts posts={posts} />;
};

export default PostsPage;
