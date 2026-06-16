import { type FC } from "react";
import type { IUser } from "../../models/IUser";
import type { IPost } from "../../models/IPost";
import type { IComment } from "../../models/IComment";

interface IComplexProps {
  users: IUser[];
  posts: IPost[];
  comments: IComment[];
}

const Complex: FC<IComplexProps> = ({ users, posts, comments }) => {
  return (
    <>
      <div>{`users: ${users.length}`}</div>
      <div>{`posts: ${posts.length}`}</div>
      <div>{`comments: ${comments.length}`}</div>
    </>
  );
};

export default Complex;
