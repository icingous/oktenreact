import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className='p-4 flex gap-4 sticky top-0 bg-white border-b-2 border-b-gray-300'>
      <li>
        <Link to=''>Home</Link>
      </li>
      <li>
        <Link to='cars'>Cars</Link>
      </li>
      <li>
        <Link to='cars/create'>Create a Car</Link>
      </li>
    </ul>
  );
};

export default Menu;
