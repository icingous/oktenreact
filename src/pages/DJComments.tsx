import Comments from '../components/comments/Comments';
import urls from '../constants/urls';

const DJComments = () => {
  return (
    <div>
      <h2>DummyJson Comments</h2>
      <Comments url={urls.dj.comments} />
    </div>
  );
};

export default DJComments;
