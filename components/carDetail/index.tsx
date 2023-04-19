import { Car } from "@/pages";
import Filters from "../filters";
import RecentCars from "../recentCars";
import RecommendedCars from "../recommendedCars";
import CarDetailCard from "./carDetailCard";
import CarGallery from "./carGallery";

interface Props {
  carID: number;
  cars: Car[];
}

const CarDetail = ({ cars, carID }: Props) => {
  return (
    <section className="flex">
      <div className="w-full lg:w-1/4">
        <Filters />
      </div>
      <div className="w-full px-6 py-8 md:px-8 lg:w-3/4">
        <div className="flex flex-col gap-8 md:flex-row">
          <CarGallery car={cars[carID]} />
          <CarDetailCard car={cars[carID]} />
        </div>
        <RecentCars cars={cars} />
        <RecommendedCars cars={cars} />
      </div>
    </section>
  );
};

export default CarDetail;
