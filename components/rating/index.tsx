import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface RatingProps extends React.PropsWithChildren {}
const Rating: React.FC<RatingProps> = (): JSX.Element => {
  const [rate, setRate] = useState(0);
  const array = [1, 1, 1, 1, 1];
  const handleRate = (index: any) => {
    setRate(index);
  };
  return (
    <div className="flex">
      {array.map((_, index) => {
        if (index + 1 > rate) {
          return (
            <AiOutlineStar
              className="cursor-pointer text-light-details"
              onClick={() => handleRate(index + 1)}
            />
          );
        } else {
          return (
            <AiFillStar
              onClick={() => handleRate(index + 1)}
              className="cursor-pointer text-light-warning"
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;
