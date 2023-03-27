import React from "react";

interface LocationPickerProps extends React.PropsWithChildren {}
const LocationPicker: React.FC<LocationPickerProps> = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col justify-between">
      <p className="font-bold">Locations</p>
      <select
        name="locations"
        className="cursor-pointer text-xs text-light-details md:text-base lg:text-xs xl:text-base"
      >
        <option value="">Select your city</option>
        <option value="">Tehran</option>
        <option value="">Tabriz</option>
        <option value="">Zanjan</option>
        <option value="">Qazvin</option>
        <option value="">Sanandaj</option>
        <option value="">Mashhad</option>
        <option value="">Kerman</option>
        <option value="">Yazd</option>
      </select>
    </div>
  );
};

export default LocationPicker;
