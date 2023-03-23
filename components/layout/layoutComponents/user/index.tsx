import React from "react";
import { FaUser } from "react-icons/fa";

interface UserProps extends React.PropsWithChildren {}
const User: React.FC<UserProps> = (): JSX.Element => {
  return (
    <div
      className="flex aspect-square w-11 items-center justify-center rounded-full border border-light-secondary text-light-content
    "
    >
      <FaUser />
    </div>
  );
};

export default User;
