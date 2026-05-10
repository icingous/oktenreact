import Comments from '../components/comments/Comments';
import { DJUserService } from '../services/api.service';

const DJComments = () => {
  return (
    <div>
      <h2>DummyJson Comments</h2>
      <Comments service={DJUserService} />
    </div>
  );
};

export default DJComments;
