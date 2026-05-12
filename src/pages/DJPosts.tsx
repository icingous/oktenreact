import Posts from '../components/posts/Posts';
import urls from '../constants/urls';

const DJPosts = () => {
  return (
    <div>
      <h2>DummyJson Posts</h2>
      <Posts url={urls.dj.posts} />
    </div>
  );
};

export default DJPosts;
