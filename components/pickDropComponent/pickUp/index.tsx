import React from "react";
import DatePicker from "../datePicker";
import LocationPicker from "../locationPicker";
import TimePicker from "../timePicker";

interface PickUpProps extends React.PropsWithChildren {}
const PickUp: React.FC<PickUpProps> = (): JSX.Element => {
  return (
    <div className="w-full rounded-[10px] bg-light-primary p-3 xl:p-6">
      <h3 className="font-semibold">Pick-Up</h3>
      <div className="flex h-12 items-center justify-between gap-2">
        <LocationPicker />
        <div className="h-full w-0.5 bg-light-details/40"></div>
        <DatePicker />
        <div className="h-full w-0.5 bg-light-details/40"></div>
        <TimePicker />
      </div>
    </div>
  );
};

export default PickUp;
