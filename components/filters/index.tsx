import Button from "../base/button";

interface FiltersProps extends React.PropsWithChildren {}
const Filters: React.FC<FiltersProps> = (): JSX.Element => {
  return (
    <aside className="hidden h-full w-full flex-col gap-14 bg-light-primary p-8 dark:bg-dark-primary lg:flex">
      <div className="flex flex-col gap-7">
        <span className="text-xs text-light-details dark:text-dark-details">
          TYPE
        </span>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="sport" />
          Sport{" "}
          <span className="text-light-details dark:text-dark-details">
            (10)
          </span>
        </label>
        <label
          htmlFor="suv"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="suv" />
          SUV{" "}
          <span className="text-light-details dark:text-dark-details">
            (12)
          </span>
        </label>
        <label
          htmlFor="mpv"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="mpv" />
          MPV{" "}
          <span className="text-light-details dark:text-dark-details">
            (16)
          </span>
        </label>
        <label
          htmlFor="sedan"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="sedan" />
          Sedan{" "}
          <span className="text-light-details dark:text-dark-details">
            (20)
          </span>
        </label>
        <label
          htmlFor="coupe"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="coupe" />
          Coupe{" "}
          <span className="text-light-details dark:text-dark-details">
            (14)
          </span>
        </label>
        <label
          htmlFor="hatchback"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="hatchback" />
          Hatchback{" "}
          <span className="text-light-details dark:text-dark-details">
            (14)
          </span>
        </label>
      </div>
      <div className="flex flex-col gap-7">
        <span className="text-xs text-light-details dark:text-dark-details">
          CAPACITY
        </span>
        <label
          htmlFor="2person"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="2person" />2 Person{" "}
          <span className="text-light-details dark:text-dark-details">
            (10)
          </span>
        </label>
        <label
          htmlFor="4person"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="4person" />4 Person{" "}
          <span className="text-light-details dark:text-dark-details">
            (14)
          </span>
        </label>
        <label
          htmlFor="6person"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="6person" />6 Person{" "}
          <span className="text-light-details dark:text-dark-details">
            (12)
          </span>
        </label>
        <label
          htmlFor="more"
          className="flex items-center gap-2 font-semibold text-light-content dark:text-dark-content"
        >
          <input type="checkbox" id="more" />8 or More{" "}
          <span className="text-light-details dark:text-dark-details">
            (16)
          </span>
        </label>
      </div>
      <div className="flex flex-col gap-7">
        <span className="text-xs text-light-details dark:text-dark-details">
          PRICE
        </span>
        <input type="range" className="w-full" />
      </div>
      <div className="flex justify-center">
        <Button title={"Apply Filters"} to={""} />
      </div>
    </aside>
  );
};

export default Filters;
