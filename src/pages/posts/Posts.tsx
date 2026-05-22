import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api.service';
import type { IPost } from '../../models/IPost';
import type { IResponseBase } from '../../models/IResponseBase';
import Posts from '../../components/posts/Posts';
import Paginator from '../../components/paginator/Paginator';
import { defaults } from '../../constants/defaults';

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [paginationData, setPaginationData] = useState<IResponseBase>(
    defaults.responseBase,
  );
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    api
      .getPage<
        IResponseBase & { posts: IPost[] }
      >('/posts', page, paginationData.size)
      .then((res) => {
        const { posts, ...data } = res;

        setPaginationData((state) => ({ ...state, ...data }));
        setPosts(posts);
      });
  }, [paginationData.size, page]);

  return (
    <>
      <Posts posts={posts} />
      <Paginator data={paginationData} />
    </>
  );
};

export default PostsPage;
