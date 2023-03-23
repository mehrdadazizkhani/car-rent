import React from "react";
import SearchBar from "../searchBar";
interface HeaderProps extends React.PropsWithChildren {}
const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
    <header className="w-full bg-light-primary">
      <div className="mx-auto h-full max-w-[1440px] bg-light-details py-8 px-6 md:py-10 md:px-[60px]">
        <div>
          <h1 className="font-bold text-light-accent">MORENT</h1>
          <SearchBar />
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
