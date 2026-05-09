import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className='list-none flex justify-evenly'>
      <li>
        <Link to=''>Home</Link>
      </li>
      <li>
        <Link to='users/jsonplaceholder'>JP Users</Link>
      </li>
      <li>
        <Link to='users/dummyjson'>DJ Users</Link>
      </li>
      <li>
        <Link to='posts/jsonplaceholder'>JP Posts</Link>
      </li>
      <li>
        <Link to='posts/dummyjson'>DJ Posts</Link>
      </li>
      <li>
        <Link to='comments/jsonplaceholder'>JP Comments</Link>
      </li>
      <li>
        <Link to='comments/dummyjson'>DJ Comments</Link>
      </li>
    </ul>
  );
};

export default Menu;
