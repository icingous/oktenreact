import Users from '../components/users/Users';
import { JPUserService } from '../services/api.service';

const JPUsers = () => {
  return (
    <div>
      <h2>JsonPlaceholder Users</h2>
      <Users service={JPUserService} />
    </div>
  );
};

export default JPUsers;
