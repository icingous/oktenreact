import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { actions } from "../../redux/slices/commentSlice";

const useComments = () => {
  const dispatch = useAppDispatch();
  const { comments, loading } = useAppSelector(({ comments }) => comments);

  useEffect(() => {
    if (!comments) {
      dispatch(actions.loadComments());
    }
  }, [dispatch, comments]);

  return { comments, loading };
};

export default useComments;
