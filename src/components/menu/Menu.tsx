import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className='flex gap-2 border-b-2 border-gray-300 p-4'>
      <li>
        <Link to=''>Home</Link>
      </li>
      <li>
        <Link to='users'>Users</Link>
      </li>
      <li>
        <Link to='posts'>Posts</Link>
      </li>
    </ul>
  );
};

export default Menu;
