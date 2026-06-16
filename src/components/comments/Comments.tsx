import { type FC } from "react";
import Comment from "./Comment";
import type { IComment } from "../../models/IComment";

interface ICommentsProps {
  comments: IComment[] | null;
}

const Comments: FC<ICommentsProps> = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
