import Filters from "../filters";
import RecentCars from "../recentCars";
import RecommendedCars from "../recommendedCars";
import CarDetailCard from "./carDetailCard";
import CarGallery from "./carGallery";

interface CarDetailProps extends React.PropsWithChildren {
  carID: string | string[];
  data: any[];
}
const CarDetail: React.FC<CarDetailProps> = ({ carID, data }): JSX.Element => {
  return (
    <section className="flex">
      <div className="w-full lg:w-1/4">
        <Filters />
      </div>
      <div className="w-full px-6 py-8 md:px-8 lg:w-3/4">
        <div className="flex flex-col gap-8 md:flex-row">
          <CarGallery carID={carID} data={data} />
          <CarDetailCard carID={carID} data={data} />
        </div>
        <RecentCars cars={data} />
        <RecommendedCars cars={data} />
      </div>
    </section>
  );
};

export default CarDetail;
