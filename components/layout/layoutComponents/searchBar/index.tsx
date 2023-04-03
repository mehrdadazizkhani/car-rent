import React from "react";
import { CgOptions } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
interface SearchBarProps extends React.PropsWithChildren {}
const SearchBar: React.FC<SearchBarProps> = (): JSX.Element => {
  return (
    <div className="flex h-full w-full gap-4 rounded-full border-light-secondary text-light-content dark:border-dark-secondary dark:text-dark-content md:border">
      <div className="flex h-full w-full items-center justify-center gap-6 rounded-[10px] border border-light-secondary py-4 dark:border-dark-secondary md:border-none">
        <CiSearch size={25} className="cursor-pointer" />
        <input
          className="bg-light-primary focus:outline-none dark:bg-dark-primary dark:text-dark-content"
          type="text"
          placeholder="Search something here"
        />
      </div>
      <div className="flex aspect-square h-full items-center justify-center rounded-[10px] border border-light-secondary p-4 text-light-content dark:border-dark-secondary dark:text-dark-content md:border-none">
        <CgOptions className="cursor-pointer" size={25} />
      </div>
    </div>
  );
};

export default SearchBar;
