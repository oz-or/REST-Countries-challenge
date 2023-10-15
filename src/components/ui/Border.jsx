function Border({ borderCountry }) {
  return (
    <div className="dark:text-whitey dark:bg-blue py-1.5 px-5 w-max h-max bg-whitey shadow-[0px_0px_4px_1px_rgba(0,0,0,0.1)] cursor-pointer">
      {borderCountry}
    </div>
  );
}

export default Border;
