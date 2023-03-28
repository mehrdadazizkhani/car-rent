import Button from "@/components/base/button";
import CardLikeBtn from "@/components/carCard/cardLikeBtn";
import Rating from "@/components/rating";

interface CarDetailCardProps extends React.PropsWithChildren {
  carID: string | string[];
  data: any[];
}
const CarDetailCard: React.FC<CarDetailCardProps> = ({
  carID,
  data,
}): JSX.Element => {
  const car = data[+carID - 1];

  return (
    <div className="flex w-full flex-col justify-between gap-9 rounded-[10px] bg-light-primary p-6">
      <div className="flex flex-col gap-[10px]">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-3xl font-bold">{car.name}</h2>
          <CardLikeBtn />
        </div>
        <div className="flex items-center gap-2">
          <Rating />
          <span className="text-sm text-light-content">440+ Reviewer</span>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="w-full text-light-content lg:text-xl">
          {car.description}
        </p>
        <div className="grid grid-cols-2 gap-x-11 gap-y-4 text-light-details">
          <div className="flex justify-between">
            Type Car
            <span className="font-semibold text-light-content">
              {" "}
              {car.type}
            </span>
          </div>
          <div className="flex justify-between">
            Capacity
            <span className="font-semibold text-light-content">
              {" "}
              {car.capacity}Person
            </span>
          </div>
          <div className="flex justify-between">
            Steering
            <span className="font-semibold text-light-content">
              {" "}
              {car.steering}
            </span>
          </div>
          <div className="flex justify-between">
            Gasoline
            <span className="font-semibold text-light-content">
              {" "}
              {car.fuel}L
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <p className="text-xl font-bold">
            ${car.newPrice ? car.newPrice : car.price}.00/
            <span className="text-sm font-bold text-light-details"> day</span>
          </p>
          {car.newPrice != 0 && (
            <span className="text-sm font-bold text-light-details line-through">
              ${car.price}.00
            </span>
          )}
        </div>
        <Button title={"Rent Now"} to={""} />
      </div>
    </div>
  );
};

export default CarDetailCard;
