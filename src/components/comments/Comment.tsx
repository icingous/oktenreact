import { type FC } from 'react';
import type { IComment } from '../../models/IComment';

type PropTypes = {
  comment: IComment;
};

const Comment: FC<PropTypes> = ({
  comment: {
    id,
    body,
    user: { fullName: name },
    postId,
  },
}) => {
  return (
    <div className='p-4 flex flex-col gap-2.5 odd:bg-amber-100 even:bg-gray-100'>
      <p className='text-xl'>{body}</p>
      <p className='font-semibold'>{name}</p>
      <p className='text-xs'>
        <span>{`id: ${id}`}</span> <span>{`postId: ${postId}`}</span>{' '}
      </p>
    </div>
  );
};

export default Comment;
