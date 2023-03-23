import React from "react";

interface NavItemProps extends React.PropsWithChildren {
  title: string;
}
const NavItem: React.FC<NavItemProps> = ({ title }): JSX.Element => {
  return <li className="cursor-pointer">{title}</li>;
};

export default NavItem;
