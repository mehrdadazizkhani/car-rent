import React from "react";
import { FaBell } from "react-icons/fa";

interface NotificationProps extends React.PropsWithChildren {}
const Notification: React.FC<NotificationProps> = (): JSX.Element => {
  return (
    <div className="circle-btn">
      <FaBell />
    </div>
  );
};

export default Notification;
