import React from "react";
import DatePicker from "../datePicker";
import LocationPicker from "../locationPicker";
import TimePicker from "../timePicker";

interface DropOffProps extends React.PropsWithChildren {
  enable: boolean;
}
const DropOff: React.FC<DropOffProps> = ({ enable }): JSX.Element => {
  return (
    <div className="relative h-fit w-full rounded-[10px] bg-light-primary p-3 xl:p-6">
      <h3 className="font-semibold">Drop-Off</h3>
      <div className="flex h-12 items-center justify-between gap-2">
        <LocationPicker />
        <div className="h-full w-0.5 bg-light-details/40"></div>
        <DatePicker />
        <div className="h-full w-0.5 bg-light-details/40"></div>
        <TimePicker />
      </div>
      {!enable && (
        <div className="absolute top-0 left-0 h-full w-full rounded-[10px] bg-light-secondary opacity-50"></div>
      )}
    </div>
  );
};

export default DropOff;
