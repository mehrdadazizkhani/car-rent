import Image from "next/image";
import { useState } from "react";

interface CarGalleryProps extends React.PropsWithChildren {
  carID: string | string[] | undefined;
  data: any[];
}
const CarGallery: React.FC<CarGalleryProps> = ({
  carID,
  data,
}): JSX.Element => {
  const car = typeof carID === "string" && data[+carID - 1];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleFirstSlide = () => {
    setCurrentSlide(0);
  };
  const handleSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex w-full flex-col gap-6 md:w-1/2">
      <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-light-accent/70 md:aspect-square">
        <div
          className={`${
            currentSlide != 0 && "hidden"
          } absolute flex h-full w-full flex-col items-center justify-between p-6`}
        >
          <p className="text-3xl font-semibold text-light-primary">
            <span>{car.type}</span> car with the best design and acceleration
          </p>
          <p className="text-base text-light-primary">
            Safety and comfort while driving a futuristic and elegant{" "}
            <span>{car.type}s</span> car
          </p>
          <Image src={car.image} alt={car.name} width="300" height="10" />
        </div>

        {car.views.map((view: string, index: number) => {
          return (
            <Image
              width="0"
              height="0"
              sizes="100vw"
              key={index}
              src={view}
              alt={car.name}
              className={`${
                currentSlide != index + 1 && "hidden"
              } absolute top-0 left-0 h-full w-full object-cover object-center`}
            />
          );
        })}
      </div>
      <div className="flex w-full overflow-x-scroll scrollbar-none">
        <div className="flex h-28 w-fit gap-4 md:gap-6">
          <div
            onClick={handleFirstSlide}
            className="flex h-full w-[150px] cursor-pointer items-center justify-center rounded-[10px] bg-light-accent/70"
          >
            <img src={car.image} alt={car.name} className="w-28" />
          </div>
          {car.views.map((view: string, index: number) => {
            return (
              <div key={index} className="h-28 w-[150px]">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  onClick={() => handleSlide(index + 1)}
                  src={view}
                  alt={car.name}
                  className="h-full w-full cursor-pointer rounded-[10px] object-cover object-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarGallery;
