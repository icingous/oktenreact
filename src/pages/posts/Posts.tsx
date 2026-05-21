import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api.service';
import type { IPost } from '../../models/IPost';
import type { IResponseBase } from '../../models/IResponseBase';
import Posts from '../../components/posts/Posts';

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = Number(searchParams.get('page')!);

    api
      .getPage<IResponseBase & { posts: IPost[] }>('/posts', page)
      .then((res) => setPosts(res.posts));
  }, [searchParams]);

  return <Posts posts={posts} />;
};

export default PostsPage;
