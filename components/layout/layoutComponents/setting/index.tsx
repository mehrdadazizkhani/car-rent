import React from "react";
import { FaCog } from "react-icons/fa";

interface SettingProps extends React.PropsWithChildren {}
const Setting: React.FC<SettingProps> = (): JSX.Element => {
  return (
    <div className="circle-btn">
      <FaCog />
    </div>
  );
};

export default Setting;
