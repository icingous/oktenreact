import { type FC } from 'react';
import type { IPost } from '../models/IPost';

type PropTypes = {
  post: IPost;
};

const Post: FC<PropTypes> = ({ post: { id, userId, title, body } }) => {
  return (
    <div className='p-2 flex flex-col gap-2 odd:bg-amber-200 even:bg-gray-100'>
      <h3 className='font-bold text-2xl'>{title}</h3>
      <p className='italic'>{body}</p>
      <p className='flex gap-3.5 font-bold text-sm'>
        <span>{`id: ${id}`}</span>
        <span>{`userId: ${userId}`}</span>
      </p>
    </div>
  );
};

export default Post;
