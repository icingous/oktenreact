import { type FC } from "react";

interface IMessageProps {
  message: string;
}

const Message: FC<IMessageProps> = ({ message }) => {
  return <h3 className="text-red-400">{message}</h3>;
};

export default Message;
