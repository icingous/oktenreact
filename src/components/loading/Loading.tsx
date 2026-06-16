import React, { type FC } from "react";

interface ILoadingProps {
  loading: boolean;
}

const Loading: FC<ILoadingProps> = ({ loading }) => {
  return loading ? <div>Loading...</div> : null;
};

export default Loading;
