import Users from '../components/users/Users';
import urls from '../constants/urls';

const JPUsers = () => {
  return (
    <div>
      <h2>JsonPlaceholder Users</h2>
      <Users url={urls.jp.users} />
    </div>
  );
};

export default JPUsers;
