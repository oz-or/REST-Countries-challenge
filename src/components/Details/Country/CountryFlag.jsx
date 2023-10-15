function CountryFlag({ flag }) {
  return (
    <img
      src={`${flag}`}
      alt="Country Flag"
      className=" w-[310px] 500:w-[400px] 660:w-[500px] 1050:w-[400px] 1050:h-[300px] 1100:w-[500px] 1100:h-[350px] 1050:mt-6"
    />
  );
}

export default CountryFlag;
