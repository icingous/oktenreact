import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { actions } from "../../redux/slices/userSlice";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector(({ users }) => users);

  useEffect(() => {
    if (!users) {
      dispatch(actions.loadUsers());
    }
  }, [dispatch, users]);

  return { users, loading };
};

export default useUsers;
