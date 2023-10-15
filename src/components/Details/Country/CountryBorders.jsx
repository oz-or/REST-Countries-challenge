import { Link } from "react-router-dom";

import lookup from "country-code-lookup";

import Border from "../../ui/Border";

function CountryBorders({ countryObj, countries }) {
  return (
    Object.hasOwn(countryObj, "borders") && (
      <div className="grid justify-start gap-y-4 1050:gap-y-0 ">
        <h2 className="text-lg font-semibold 1050:mr-4 1050:mb-8 w-max h-max dark:text-whitey">
          Border Countries:
        </h2>
        <div className="flex gap-x-3 flex-wrap gap-y-5 w-[310px]  500:w-[400px] 1050:w-[450px] 1340:w-[500px] 660:w-[500px]  mb-20 1050:mb-0 overflow-auto">
          {countryObj.borders.map((border) => {
            const fullName = lookup.byIso(`${border}`).country;

            return countries.map((country, i) => {
              if (country.name.common === fullName) {
                const stateObj = { country, countries };
                return (
                  <Link
                    key={i}
                    to={`/${country.name.common}`}
                    state={{ stateObj }}
                  >
                    <Border key={i} borderCountry={country.name.common} />
                  </Link>
                );
              }
            });
          })}
        </div>
      </div>
    )
  );
}

export default CountryBorders;
