import Users from '../components/users/Users';
import { DJUserService } from '../services/api.service';

const JPUsers = () => {
  return (
    <div>
      <h2>DummyJson Users</h2>
      <Users service={DJUserService} />
    </div>
  );
};

export default JPUsers;
