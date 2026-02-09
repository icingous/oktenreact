import { useEffect, useState } from 'react';
import { getComments } from '../services/api.service';
import type { IComment } from '../models/IComment';
import Comment from './Comment';

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    getComments().then((data) => setComments(data));
  }, []);

  return (
    <div className='w-full'>
      <section className='max-w-2xl mx-auto'>
        <h2 className='text-4xl font-bold pb-5 pt-3'>Comments</h2>
        <div className='flex flex-col'>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Comments;
