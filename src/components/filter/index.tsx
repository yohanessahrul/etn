import React from "react";

interface iFilter {
  name: string;
  setName: (val: string) => void;
  car: string;
  setCar: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  searchHandler: () => void;
}

const Filter = ({
  name,
  setName,
  car,
  setCar,
  city,
  setCity,
  searchHandler,
}: iFilter) => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 bg-secondary-500 p-4 rounded-xl mt-6">
        <div className="w-full h-10">
          <input
            className="w-full h-full p-2 rounded-md"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="w-full h-10">
          <input
            className="w-full h-full p-2 rounded-md"
            type="text"
            value={car}
            onChange={(e) => setCar(e.target.value)}
            placeholder="Car"
          />
        </div>
        <div className="w-full h-10">
          <input
            className="w-full h-full p-2 rounded-md"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>
        <div className="w-full h-10 ">
          <button
            className="w-full h-full bg-primary-800 rounded-md text-neutral-100"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
