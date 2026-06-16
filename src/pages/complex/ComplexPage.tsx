import { useEffect } from "react";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router";
import Complex from "../../components/complex/Complex";

const ComplexPage = () => {
  const {
    comments: { comments },
    posts: { posts },
    users: { users },
  } = useAppSelector((state) => state);
  const isValid = comments && posts && users;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isValid) {
      navigate("/", { state: { from: "complex" } });
    }
  }, [isValid, navigate]);

  return isValid ? (
    <Complex users={users!} posts={posts!} comments={comments!} />
  ) : null;
};

export default ComplexPage;
