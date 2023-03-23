import React, { Children } from "react";
import Footer from "../layoutComponents/footer";
import Header from "../layoutComponents/header";
interface MainLayoutProps extends React.PropsWithChildren {}
const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
