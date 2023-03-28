import Button from "../base/button";

interface FiltersProps extends React.PropsWithChildren {}
const Filters: React.FC<FiltersProps> = (): JSX.Element => {
  return (
    <aside className="hidden h-full w-full flex-col gap-14 bg-light-primary p-8 lg:flex">
      <div className="flex flex-col gap-7">
        <span className="text-xs text-light-details">TYPE</span>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />
          Sport <span className="text-light-details">(10)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />
          SUV <span className="text-light-details">(12)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />
          MPV <span className="text-light-details">(16)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />
          Sedan <span className="text-light-details">(20)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />
          Coupe <span className="text-light-details">(14)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />
          Hatchback <span className="text-light-details">(14)</span>
        </label>
      </div>
      <div className="flex flex-col gap-7">
        <span className="text-xs text-light-details">CAPACITY</span>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />2 Person{" "}
          <span className="text-light-details">(10)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />4 Person{" "}
          <span className="text-light-details">(14)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />6 Person{" "}
          <span className="text-light-details">(12)</span>
        </label>
        <label
          htmlFor="sport"
          className="flex items-center gap-2 font-semibold text-light-content"
        >
          <input type="checkbox" id="sport" />8 or More{" "}
          <span className="text-light-details">(16)</span>
        </label>
      </div>
      <div className="flex flex-col gap-7">
        <span className="text-xs text-light-details">PRICE</span>
        <input type="range" className="w-full" />
      </div>
      <div className="flex justify-center">
        <Button title={"Apply Filters"} to={""} />
      </div>
    </aside>
  );
};

export default Filters;
