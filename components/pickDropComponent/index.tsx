import React, { useState } from "react";
import DropOff from "./dropOff";
import PickUp from "./pickUp";
import { TbArrowGuide, TbArrowsSort } from "react-icons/tb";

interface PickDropProps extends React.PropsWithChildren {}
const PickDrop: React.FC<PickDropProps> = (): JSX.Element => {
  const [same, setSame] = useState(true);

  const handleSwitch = () => {
    setSame(!same);
  };

  return (
    <section className="relative flex w-full flex-col items-center gap-8 py-4 px-6 md:px-[60px] lg:flex-row lg:gap-11">
      <PickUp />
      <div
        onClick={handleSwitch}
        className="absolute top-[calc(50%-28px)] z-10 flex aspect-square h-14 cursor-pointer items-center justify-center rounded-[10px] bg-light-accent text-lg text-light-primary dark:bg-dark-accent dark:text-dark-primary lg:relative"
      >
        {same ? <TbArrowGuide /> : <TbArrowsSort />}
      </div>
      <DropOff enable={same} />
    </section>
  );
};

export default PickDrop;
