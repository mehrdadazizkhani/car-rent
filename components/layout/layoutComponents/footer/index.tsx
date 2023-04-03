import React from "react";
import NavItem from "../navItem";
interface FooterProps extends React.PropsWithChildren {}
const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return (
    <footer className="w-full bg-light-primary dark:bg-dark-primary">
      <div className="mx-auto flex h-full max-w-[1440px] flex-col gap-12 py-8 px-6 lg:py-10 lg:px-[60px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-light-accent lg:text-3xl">
              MORENT
            </h1>
            <p className="w-72 text-xs text-light-content dark:text-dark-content lg:text-base">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-12 text-light-heading dark:text-dark-heading lg:w-fit lg:flex-nowrap">
            <div className="flex w-36 flex-col gap-6">
              <h3 className="text-xl font-semibold">About</h3>
              <ul className="flex flex-col gap-5 text-sm text-light-content dark:text-dark-content md:text-base">
                <NavItem title={"How it works"} />
                <NavItem title={"Featured"} />
                <NavItem title={"Partnership"} />
                <NavItem title={"Bussiness Relation"} />
              </ul>
            </div>
            <div className="flex w-36 flex-col gap-6">
              <h3 className="text-xl font-semibold">Community</h3>
              <ul className="flex flex-col gap-5 text-sm text-light-content dark:text-dark-content md:text-base">
                <NavItem title={"Events"} />
                <NavItem title={"Blog"} />
                <NavItem title={"Podcast"} />
                <NavItem title={"Invite a friend"} />
              </ul>
            </div>
            <div className="flex w-36 flex-col gap-6">
              <h3 className="text-xl font-semibold">Social</h3>
              <ul className="flex flex-col gap-5 text-sm text-light-content dark:text-dark-content md:text-base">
                <NavItem title={"Discord"} />
                <NavItem title={"Instagram"} />
                <NavItem title={"Twitter"} />
                <NavItem title={"Facebook"} />
              </ul>
            </div>
          </div>
        </div>
        <hr className="hidden border-light-secondary dark:border-dark-secondary lg:block" />
        <div className="flex flex-col-reverse justify-between gap-8 text-xs font-bold text-light-heading dark:text-dark-heading lg:flex-row">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex justify-between gap-[60px]">
            <p className="cursor-pointer">Privacy & Policy</p>
            <p className="cursor-pointer">Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
