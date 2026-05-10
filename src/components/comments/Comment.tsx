import { type FC } from 'react';
import type IComment from '../../models/IComment';

interface ICommentProps {
  comment: IComment;
}

const Comment: FC<ICommentProps> = ({ comment }) => {
  return <div>{comment.body}</div>;
};

export default Comment;
