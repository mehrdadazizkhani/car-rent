import React from "react";
import Footer from "../layoutComponents/footer";
import SearchBar from "../layoutComponents/searchBar";
import Setting from "../layoutComponents/setting";
import User from "../layoutComponents/user";
import Notification from "../layoutComponents/notification";
import Like from "../layoutComponents/like";
interface CarDetailLayoutProps extends React.PropsWithChildren {}
const CarDetailLayout: React.FC<CarDetailLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <header className="w-full bg-light-primary">
        <div className="mx-auto flex h-full w-full flex-col items-center justify-between py-8 px-6 lg:max-w-[1440px] lg:flex-row lg:py-10 lg:px-[60px]">
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <div className="flex h-full w-full flex-col-reverse justify-between lg:w-fit">
              <h1 className="text-2xl font-bold text-light-accent">MORENT</h1>
              <div className="flex h-full w-full justify-between lg:hidden">
                <div className="flex h-5 w-8 flex-col justify-between">
                  <div className="h-0.5 w-full bg-light-content"></div>
                  <div className="h-0.5 w-full bg-light-content"></div>
                  <div className="h-0.5 w-full bg-light-content"></div>
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
            <User />
          </div>
        </div>
      </header>
      <section className="overflow-hidden bg-light-secondary">
        <div className="mx-auto max-w-[1440px]">{children}</div>
      </section>
      <Footer />
    </>
  );
};

export default CarDetailLayout;
