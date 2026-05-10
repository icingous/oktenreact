import Posts from '../components/posts/Posts';
import { JPUserService } from '../services/api.service';

const JPPosts = () => {
  return (
    <div>
      <h2>JsonPlaceholder Posts</h2>
      <Posts service={JPUserService} />
    </div>
  );
};

export default JPPosts;
