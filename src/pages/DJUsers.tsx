import Users from '../components/users/Users';
import urls from '../constants/urls';

const JPUsers = () => {
  return (
    <div>
      <h2>DummyJson Users</h2>
      <Users url={urls.dj.users} />
    </div>
  );
};

export default JPUsers;
