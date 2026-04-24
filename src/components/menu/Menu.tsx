import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className='list-none flex justify-evenly'>
      <li>
        <Link to='users'>Users</Link>
      </li>
      <li>
        <Link to='posts'>Posts</Link>
      </li>
      <li>
        <Link to='comments'>Comments</Link>
      </li>
      <li>
        <Link to='products'>Products</Link>
      </li>
    </ul>
  );
};

export default Menu;
