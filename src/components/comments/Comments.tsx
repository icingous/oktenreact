import { useEffect, useState, type FC } from 'react';
import type IUserService from '../../models/IUserService';
import type IComment from '../../models/IComment';
import Comment from './Comment';

interface ICommentProps {
  service: IUserService;
}

const Comments: FC<ICommentProps> = ({ service }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    service.getComments().then((res) => setComments(res));
  }, [service]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default Comments;
