import React from "react";

interface TimePickerProps extends React.PropsWithChildren {}
const TimePicker: React.FC<TimePickerProps> = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col justify-between">
      <p className="font-bold text-light-heading dark:text-dark-heading">
        Time
      </p>
      <input
        type="time"
        placeholder="Select your date"
        className="bg-light-primary text-xs text-light-details dark:bg-dark-primary dark:text-dark-details md:text-base lg:text-xs xl:text-base"
      />
    </div>
  );
};

export default TimePicker;
