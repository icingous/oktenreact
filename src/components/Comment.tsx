import { type FC } from 'react';
import type { IComment } from '../models/IComment';

type PropTypes = {
  comment: IComment;
};

const Comment: FC<PropTypes> = ({
  comment: { id, name, body, email, postId },
}) => {
  return (
    <div className='p-4 flex flex-col gap-2.5 odd:bg-amber-100 even:bg-gray-100'>
      <h3 className='font-semibold text-2xl'>{name}</h3>
      <p>{body}</p>
      <address className='font-bold'>{email}</address>
      <p className='text-xs'>
        <span>{`id: ${id}`}</span> <span>{`postId: ${postId}`}</span>{' '}
      </p>
    </div>
  );
};

export default Comment;
