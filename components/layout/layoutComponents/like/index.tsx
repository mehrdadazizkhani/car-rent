import React from "react";
import { FaHeart } from "react-icons/fa";

interface LikeProps extends React.PropsWithChildren {}
const Like: React.FC<LikeProps> = (): JSX.Element => {
  return (
    <div className="circle-btn">
      <FaHeart />
    </div>
  );
};

export default Like;
