import React from "react";
import { FaBell } from "react-icons/fa";

interface NotificationProps extends React.PropsWithChildren {}
const Notification: React.FC<NotificationProps> = (): JSX.Element => {
  return (
    <div
      className="flex aspect-square w-11 items-center justify-center rounded-full border border-light-secondary text-light-content
    "
    >
      <FaBell />
    </div>
  );
};

export default Notification;
