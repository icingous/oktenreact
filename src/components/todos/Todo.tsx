import { type FC } from 'react';
import type { ITodo } from '../../models/ITodo';

type PropTypes = {
  todo: ITodo;
};

const Todo: FC<PropTypes> = ({ todo }) => {
  const { id: _id, todo: title, completed, userId } = todo;
  const id = String(_id);

  return (
    <form className='flex flex-col mb-4 p-2 hover:bg-amber-200'>
      <span className='text-xl'>{title}</span>
      <span>{`userId: ${userId}`}</span>
      <label>
        <input id={id} type='checkbox' defaultChecked={completed} /> completed
      </label>
    </form>
  );
};

export default Todo;
