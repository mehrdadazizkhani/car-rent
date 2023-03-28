import React from "react";
import CarCard from "../carCard/defaultCard";

interface RecentCarsProps extends React.PropsWithChildren {
  cars: any[];
}
const RecentCars: React.FC<RecentCarsProps> = ({ cars }): JSX.Element => {
  return (
    <section className="flex w-full flex-col gap-5 py-4">
      <div className="flex justify-between">
        <h3 className="text-light-details">Recent Cars</h3>
        <p className="cursor-pointer font-semibold text-light-accent">
          View All
        </p>
      </div>
      <div className="flex w-full overflow-x-scroll scrollbar-none">
        <div className="flex w-fit gap-8">
          {cars.map((item: any) => {
            return <CarCard data={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentCars;
