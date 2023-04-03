import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface CardLikeBtnProps extends React.PropsWithChildren {}
const CardLikeBtn: React.FC<CardLikeBtnProps> = (): JSX.Element => {
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike(!like);
  };

  return (
    <div className="cursor-pointer" onClick={likeHandler}>
      {like ? (
        <FaHeart className="text-light-error" />
      ) : (
        <FaRegHeart className="text-light-details dark:text-dark-details" />
      )}
    </div>
  );
};

export default CardLikeBtn;
