import React from "react";
interface FooterProps extends React.PropsWithChildren {}
const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return <div>footer</div>;
};

export default Footer;
