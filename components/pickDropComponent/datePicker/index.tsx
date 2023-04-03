import React from "react";

interface DatePickerProps extends React.PropsWithChildren {}
const DatePicker: React.FC<DatePickerProps> = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col justify-between">
      <p className="font-bold text-light-heading dark:text-dark-heading">
        Date
      </p>
      <input
        type="date"
        placeholder="Select your date"
        className="bg-light-primary text-xs text-light-details dark:bg-dark-primary dark:text-dark-details md:text-base lg:text-xs xl:text-base"
      />
    </div>
  );
};

export default DatePicker;
