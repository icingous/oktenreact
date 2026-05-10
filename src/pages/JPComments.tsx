import Comments from '../components/comments/Comments';
import { JPUserService } from '../services/api.service';

const JPComments = () => {
  return (
    <div>
      <h2>JsonPlaceholder Comments</h2>
      <Comments service={JPUserService} />
    </div>
  );
};

export default JPComments;
