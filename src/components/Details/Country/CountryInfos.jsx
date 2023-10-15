import Info from "../../ui/Info";

function CountryInfos({
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
}) {
  const nameData = name["common"];
  const nativeNameData = Object.values(nativeName)["0"].common;
  const capitalData = capital[0];
  const topLevelDomainData = topLevelDomain[0];
  const currenciesData = Object.values(currencies)["0"].name;
  const languagesData = Object.values(languages).toString();

  return (
    <div className="mt-10 660:w-[400px] ">
      <span className="text-2xl font-extrabold 1050:text-[28px] dark:text-whitey">
        {nameData}
      </span>
      <div className="660:w-[400px]">
        <div className="grid mt-6 660:grid-cols-[repeat(2,_200px)] 660:w-[400px]  gap-y-10 1050:gap-x-12 660:gap-x-16 1340:gap-x-20 ">
          <div className="grid gap-y-2 ">
            <Info tag={"Native Name:"} data={nativeNameData} />
            <Info tag={"Population:"} data={population} />
            <Info tag={"Region:"} data={region} />
            <Info tag={"Sub Region:"} data={subRegion} />
            <Info tag={"Capital:"} data={capitalData} />
          </div>
          <div className="flex flex-col flex-wrap gap-y-2">
            <Info tag={"Top Level Domain:"} data={topLevelDomainData} />
            <Info tag={"Currencies:"} data={currenciesData} />
            <Info tag={"Languages:"} data={languagesData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfos;
