import { useContext } from "react";

import CountryListLoaderContext from "../../contexts/CountryListLoaderContext";
import BorderContext from "../../contexts/BorderContext";

import SelectOption from "./SelectOption";

function SearchFilter({ input, setInput, region, setRegion }) {
  const { isLoading } = useContext(CountryListLoaderContext);
  const { countries } = useContext(BorderContext);

  const regions = [
    { name: "Africa", id: 1 },
    { name: "Americas", id: 2 },
    { name: "Asia", id: 3 },
    { name: "Europe", id: 4 },
    { name: "Oceania", id: 5 },
  ];

  return (
    <div className="flex flex-col 660:flex-row 660:justify-between 660:px-[30px] 1050:px-[56px] px-5 pt-6 pb-7 gap-y-10 1340:px-[50px] 660:py-[56px] 1440:px-[86px]">
      <div className="1050:w-[500px] ">
        <ion-icon
          src="../../../search-outline.svg"
          class="hydrated absolute opacity-40 h-5 w-5 top-[118px] left-[54px] 1050:top-[158px] 1050:left-[85px] 660:top-[151px] 1440:left-[118px]"
        ></ion-icon>

        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full py-[16px] pl-20 placeholder:text-[14px] placeholder:text-darkGray placeholder:opacity-40 shadow-[2px_5px_10px_-1px_rgba(0,0,0,0.03)] dark:bg-blue dark:text-whitey"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <details className="shadow-[2px_5px_10px_-1px_rgba(0,0,0,0.03)]">
        <summary className="radios dark:bg-blue dark:text-whitey">
          <span>{region}</span>
        </summary>
        {!isLoading ||
          (countries === "Error" && (
            <ul className="list dark:bg-blue shadow-[2px_5px_10px_-1px_rgba(0,0,0,0.03)]">
              {region !== "Filter by Region" && region !== "All Countries" && (
                <SelectOption
                  key={0}
                  value="All Countries"
                  onClick={() => setRegion("All Countries")}
                >
                  All Countries
                </SelectOption>
              )}

              {regions.map(
                (item) =>
                  item.name !== region && (
                    <SelectOption
                      key={item.id}
                      value={`${item.name}`}
                      onClick={() => setRegion(item.name)}
                    >
                      {item.name}
                    </SelectOption>
                  )
              )}
            </ul>
          ))}
      </details>
    </div>
  );
}

export default SearchFilter;
