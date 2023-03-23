import React from "react";
import { FaHeart } from "react-icons/fa";

interface LikeProps extends React.PropsWithChildren {}
const Like: React.FC<LikeProps> = (): JSX.Element => {
  return (
    <div
      className="flex aspect-square w-11 cursor-pointer items-center justify-center rounded-full border border-light-secondary text-light-content
    "
    >
      <FaHeart />
    </div>
  );
};

export default Like;
