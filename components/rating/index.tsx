import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface RatingProps extends React.PropsWithChildren {}
const Rating: React.FC<RatingProps> = (): JSX.Element => {
  const [rate, setRate] = useState(0);
  const array = [1, 2, 3, 4, 5];
  const handleRate = (index: any) => {
    setRate(index);
  };
  return (
    <div className="flex">
      {array.map((item, index) => {
        if (item > rate) {
          return (
            <AiOutlineStar
              key={index}
              className="cursor-pointer text-light-details dark:text-dark-details"
              onClick={() => handleRate(item)}
            />
          );
        } else {
          return (
            <AiFillStar
              onClick={() => handleRate(item)}
              className="cursor-pointer text-light-warning dark:text-dark-warning"
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;
