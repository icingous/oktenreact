import { type FC } from "react";
import type { IComment } from "../../models/IComment";

interface ICommentProps {
  comment: IComment;
}

const Comment: FC<ICommentProps> = ({ comment: { id, body } }) => {
  return <div>{`${id} ${body}`}</div>;
};

export default Comment;
