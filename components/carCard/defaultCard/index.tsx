import React from "react";
import Image, { StaticImageData } from "next/image";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import Button from "../../base/button";
import CardLikeBtn from "../cardLikeBtn";
import { Url } from "next/dist/shared/lib/router/router";

interface CarCardProps extends React.PropsWithChildren {
  data: {
    id: number;
    name: string;
    type: string;
    image: string;
    views: [string, string];
    description: string;
    capacity: number;
    steering: string;
    fuel: number;
    price: number;
    newPrice: number;
  };
}
const CarCard: React.FC<CarCardProps> = ({ data }): JSX.Element => {
  return (
    <div className="flex h-[388px] w-[300px] flex-col items-center justify-between rounded-[10px] bg-light-primary p-6">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-xl font-bold text-light-heading">{data.name}</h2>
          <CardLikeBtn />
        </div>
        <span className="text-sm text-light-details">{data.type}</span>
      </div>
      <Image
        src={data.image}
        alt={data.name}
        width="224"
        height="10"
        className="h-auto w-[224px]"
      />
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full justify-between text-light-details">
          <div className="flex items-center gap-1">
            <BsFuelPumpFill />
            <span>{data.fuel}L</span>
          </div>
          <div className="flex items-center gap-1">
            <GiSteeringWheel />
            <span>{data.steering}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiUsers />
            <span>{data.capacity}People</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="text-xl font-bold">
              ${data.newPrice ? data.newPrice : data.price}.00/
              <span className="text-sm font-bold text-light-details"> day</span>
            </p>
            {data.newPrice != 0 && (
              <span className="text-sm font-bold text-light-details line-through">
                ${data.price}.00
              </span>
            )}
          </div>
          <Button title={"Rent Now"} to={""} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
