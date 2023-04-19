import React, { ReactNode } from "react";
import Footer from "../layoutComponents/footer";
import SearchBar from "../layoutComponents/searchBar";
import Setting from "../layoutComponents/setting";
import User from "../layoutComponents/user";
import Notification from "../layoutComponents/notification";
import Like from "../layoutComponents/like";
import DarkModeToggle from "../layoutComponents/darkModeToggle";
import Link from "next/link";

interface Props {
  children?: ReactNode;
}

const CarDetailLayout = ({ children }: Props) => {
  return (
    <>
      <header className="w-full bg-light-primary dark:bg-dark-primary">
        <div className="mx-auto flex h-full w-full flex-col items-center justify-between py-8 px-6 lg:max-w-[1440px] lg:flex-row lg:py-10 lg:px-[60px]">
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <div className="flex h-full w-full flex-col-reverse justify-between lg:w-fit">
              <Link href={"/"}>
                <h1 className="text-2xl font-bold text-light-accent dark:text-dark-accent">
                  MORENT
                </h1>
              </Link>
              <div className="flex h-full w-full justify-between lg:hidden">
                <div className="flex h-5 w-8 flex-col justify-between">
                  <div className="h-0.5 w-full bg-light-content dark:bg-dark-content"></div>
                  <div className="h-0.5 w-full bg-light-content dark:bg-dark-content"></div>
                  <div className="h-0.5 w-full bg-light-content dark:bg-dark-content"></div>
                </div>
                <User />
              </div>
            </div>
            <div className="w-full lg:w-[400px]">
              <SearchBar />
            </div>
          </div>
          <div className="hidden gap-5 lg:flex">
            <div className="flex gap-5">
              <Like />
              <Notification />
              <Setting />
            </div>
            <DarkModeToggle />
            <User />
          </div>
        </div>
      </header>
      <section className="overflow-hidden bg-light-secondary dark:bg-dark-secondary">
        <div className="mx-auto max-w-[1440px]">{children}</div>
      </section>
      <Footer />
    </>
  );
};

export default CarDetailLayout;
