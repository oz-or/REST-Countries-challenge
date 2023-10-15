function CountryCard({ children, flag, name }) {
  return (
    <div className="bg-whitey max-w-[275px] overflow-hidden rounded shadow-[2px_5px_10px_-1px_rgba(0,0,0,0.03)] dark:text-whitey dark:bg-blue">
      <img
        src={`${flag}`}
        alt={`Flag of ${name}`}
        className="w-full h-[175px]"
      />

      <div className="flex flex-col px-8 pt-8 pb-14 gap-y-5">
        <span className="text-lg font-extrabold">{name}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default CountryCard;
