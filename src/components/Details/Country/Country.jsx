import CountryInfos from "./CountryInfos";
import CountryBorders from "./CountryBorders";
import CountryFlag from "./CountryFlag";
import { useLocation } from "react-router-dom";

function Country() {
  const { state } = useLocation();

  const country = state.stateObj.country;
  const countries = state.stateObj.countries;

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col 1050:flex-row 1050:gap-x-16 1340:gap-x-28">
        <CountryFlag flag={country.flags.png} />

        <div className="grid gap-y-10 500:w-[400px] 660:w-[500px] 1050:w-[450px] ">
          <CountryInfos
            name={country.name}
            nativeName={country.name.nativeName}
            population={country.population}
            region={country.region}
            subRegion={country.subregion}
            capital={country.capital}
            topLevelDomain={country.tld}
            currencies={country.currencies}
            languages={country.languages}
          />

          <CountryBorders countryObj={country} countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default Country;
