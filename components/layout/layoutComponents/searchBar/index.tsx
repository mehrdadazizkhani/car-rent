import React from "react";
import { CgOptions } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
interface SearchBarProps extends React.PropsWithChildren {}
const SearchBar: React.FC<SearchBarProps> = (): JSX.Element => {
  return (
    <div className="flex h-full w-full gap-4 rounded-full border-light-secondary text-light-content md:border">
      <div className="flex h-full w-full items-center justify-center rounded-[10px] border border-light-secondary py-4 md:border-none">
        <CiSearch size={25} />
        <p>Search something here</p>
      </div>
      <div className="flex aspect-square h-full items-center justify-center rounded-[10px] border border-light-secondary p-4 md:border-none">
        <CgOptions size={25} />
      </div>
    </div>
  );
};

export default SearchBar;
