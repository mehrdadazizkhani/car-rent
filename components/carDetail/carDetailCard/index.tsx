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
    <div className="flex w-full flex-col justify-between gap-9 rounded-[10px] bg-light-primary p-6 text-light-content dark:bg-dark-primary dark:text-dark-content">
      <div className="flex flex-col gap-[10px]">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-3xl font-bold text-light-heading dark:text-dark-heading">
            {car.name}
          </h2>
          <CardLikeBtn />
        </div>
        <div className="flex items-center gap-2">
          <Rating />
          <span className="text-sm">440+ Reviewer</span>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="w-full lg:text-xl">{car.description}</p>
        <div className="grid grid-cols-2 gap-x-11 gap-y-4">
          <div className="flex justify-between font-semibold">
            <span className="text-light-details dark:text-dark-details">
              Type Car
            </span>
            {car.type}
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-light-details dark:text-dark-details">
              Capacity
            </span>
            {car.capacity}Person
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-light-details dark:text-dark-details">
              Steering
            </span>
            {car.steering}
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-light-details dark:text-dark-details">
              Gasoline
            </span>
            {car.fuel}L
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <p className="text-xl font-bold text-light-heading dark:text-dark-heading">
            ${car.newPrice ? car.newPrice : car.price}.00/
            <span className="text-sm font-bold text-light-details dark:text-dark-details">
              {" "}
              day
            </span>
          </p>
          {car.newPrice != 0 && (
            <span className="text-sm font-bold text-light-details line-through dark:text-dark-details">
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
