import Loading from "../../components/loading/Loading";
import Posts from "../../components/posts/Posts";
import usePosts from "./usePosts";

const UsersPage = () => {
  const { posts, loading } = usePosts();

  return (
    <>
      <Loading loading={loading} />
      <Posts posts={posts} />
    </>
  );
};

export default UsersPage;
