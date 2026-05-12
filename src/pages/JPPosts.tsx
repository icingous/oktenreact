import Posts from '../components/posts/Posts';
import urls from '../constants/urls';

const JPPosts = () => {
  return (
    <div>
      <h2>JsonPlaceholder Posts</h2>
      <Posts url={urls.jp.posts} />
    </div>
  );
};

export default JPPosts;
