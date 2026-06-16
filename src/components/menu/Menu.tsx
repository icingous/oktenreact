import { Link } from "react-router";

const Menu = () => {
  return (
    <div className="flex gap-2 py-4">
      <Link to="">Home</Link>
      <Link to="users">Users</Link>
      <Link to="posts">Posts</Link>
      <Link to="comments">Comments</Link>
      <Link to="complex">Complex</Link>
    </div>
  );
};

export default Menu;
