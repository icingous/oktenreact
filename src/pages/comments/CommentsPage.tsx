import Loading from "../../components/loading/Loading";
import Comments from "../../components/comments/Comments";
import useComments from "./useComments";

const CommentsPage = () => {
  const { comments, loading } = useComments();

  return (
    <>
      <Loading loading={loading} />
      <Comments comments={comments} />
    </>
  );
};

export default CommentsPage;
