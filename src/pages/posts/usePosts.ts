import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { actions } from "../../redux/slices/postSlice";

const usePosts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector(({ posts }) => posts);

  useEffect(() => {
    if (!posts) {
      dispatch(actions.loadPosts());
    }
  }, [dispatch, posts]);

  return { posts, loading };
};

export default usePosts;
