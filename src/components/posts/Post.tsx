import { type FC } from 'react';
import type { IPost } from '../../models/IPost';

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default Post;
