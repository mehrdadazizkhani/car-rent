import React from "react";
import { FaCog } from "react-icons/fa";

interface SettingProps extends React.PropsWithChildren {}
const Setting: React.FC<SettingProps> = (): JSX.Element => {
  return (
    <div
      className="flex aspect-square w-11 items-center justify-center rounded-full border border-light-secondary text-light-content
    "
    >
      <FaCog />
    </div>
  );
};

export default Setting;
