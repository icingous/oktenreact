import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='flex gap-2 p-4 border-b-2 border-gray-200'>
      <Link to=''>Home</Link>
      <Link to='login'>Login</Link>
      <Link to='auth/resources'>Resources</Link>
    </div>
  );
};

export default Menu;
