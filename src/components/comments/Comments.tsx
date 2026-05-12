import { useEffect, useState, type FC } from 'react';
import type IComment from '../../models/IComment';
import type { IUrlProps } from '../../models/IUrlProps';
import { userService } from '../../services/api.service';
import Comment from './Comment';

const Comments: FC<IUrlProps> = ({ url }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    userService.getComments(url).then((res) => setComments(res));
  }, [url]);

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
