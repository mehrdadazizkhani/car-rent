import React from "react";

interface DatePickerProps extends React.PropsWithChildren {}
const DatePicker: React.FC<DatePickerProps> = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col justify-between">
      <p className="font-bold">Date</p>
      <input
        type="date"
        placeholder="Select your date"
        className="text-xs text-light-details md:text-base lg:text-xs xl:text-base"
      />
    </div>
  );
};

export default DatePicker;
