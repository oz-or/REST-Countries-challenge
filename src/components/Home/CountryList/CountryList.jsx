import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import BorderContext from "../../../contexts/BorderContext";
import CountryListLoaderContext from "../../../contexts/CountryListLoaderContext";

import Info from "../../ui/Info";
import CountryCard from "./CountryCard";
import LoadingIndicator from "../../ui/LoadingIndicator";
import ErrorCountryList from "./ErrorCountryList";

function CountryList({ input, region }) {
  const { isLoading, setIsLoading } = useContext(CountryListLoaderContext);

  const { countries, setCountries } = useContext(BorderContext);
  let countriesByRegions = [];
  let whichArr;

  useEffect(() => {
    async function countriesApiCall() {
      try {
        if (input !== "") {
          const res = await axios.get(
            `https://restcountries.com/v3.1/name/${input}`
          );
          setCountries(res.data);
          setIsLoading(() => false);
        } else {
          const res = await axios.get(`https://restcountries.com/v3.1/all`);
          setCountries(res.data);
          setIsLoading(() => false);
        }
      } catch (error) {
        setCountries("Error");
      }
    }
    countriesApiCall();
  }, [input, setCountries, setIsLoading]);

  if (region === "Filter by Region" || region === "All Countries") {
    /* return all of the countries */
    whichArr = countries;
  } else {
    /* return only the countries whose region property is === to current region */
    countries.map((country) => {
      if (country.region === region) {
        countriesByRegions = [country, ...countriesByRegions];
      }
    });
    whichArr = countriesByRegions;
  }

  if (countries === "Error") return <ErrorCountryList />;

  return (
    <div className="flex justify-center ">
      <div className=" grid px-[20px]  grid-cols-[repeat(auto-fill,_minmax(0,_275px))] 660:grid-cols-[repeat(2,_minmax(0,_275px))] gap-14   1050:grid-cols-[repeat(3,_minmax(0,_275px))] 1050:px-[50px] 1340:grid-cols-[repeat(4,_minmax(0,_275px))]  ">
        {/*  */}
        {isLoading && <LoadingIndicator />}

        {whichArr.map((country, i) => {
          const stateObj = { country, countries };

          return (
            <Link key={i} to={`/${country.name.common}`} state={{ stateObj }}>
              <CountryCard flag={country.flags.png} name={country.name.common}>
                <Info tag={"Population:"} data={country.population} />
                <Info tag={"Region:"} data={country.region} />
                <Info tag={"Capital:"} data={country.capital} />
              </CountryCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;
