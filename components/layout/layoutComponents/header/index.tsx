import React from "react";
import SearchBar from "../searchBar";
interface HeaderProps extends React.PropsWithChildren {}
const Header: React.FC<HeaderProps> = (): JSX.Element => {
  return (
    <header className="w-full bg-light-primary">
      <div>
        <h1 className="font-bold text-light-accent">MORENT</h1>
        <SearchBar />
      </div>
      <div></div>
    </header>
  );
};

export default Header;
