import Posts from '../components/posts/Posts';
import { DJUserService } from '../services/api.service';

const DJPosts = () => {
  return (
    <div>
      <h2>DummyJson Posts</h2>
      <Posts service={DJUserService} />
    </div>
  );
};

export default DJPosts;
