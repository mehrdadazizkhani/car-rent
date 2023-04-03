import React from "react";
import { FaUser } from "react-icons/fa";

interface UserProps extends React.PropsWithChildren {}
const User: React.FC<UserProps> = (): JSX.Element => {
  return (
    <div className="circle-btn">
      <FaUser />
    </div>
  );
};

export default User;
