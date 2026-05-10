import { type FC } from 'react';
import type { IUser } from '../../models/IUser';
import { useNavigate } from 'react-router-dom';

interface IUserProps {
  user: IUser;
}

const User: FC<IUserProps> = ({ user }) => {
  const navigate = useNavigate();
  const onClickHandler = () => navigate(`${user.id}/carts`);

  return (
    <div className='grid grid-cols-[150px_auto]'>
      <span>{`${user.username}`}</span>
      <button
        onClick={onClickHandler}
        className='w-12.5 border-2 rounded bg-gray-200 cursor-pointer active:bg-gray-300'
      >
        Cart
      </button>
    </div>
  );
};

export default User;
