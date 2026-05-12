import Comments from '../components/comments/Comments';
import urls from '../constants/urls';

const JPComments = () => {
  return (
    <div>
      <h2>JsonPlaceholder Comments</h2>
      <Comments url={urls.jp.comments} />
    </div>
  );
};

export default JPComments;
