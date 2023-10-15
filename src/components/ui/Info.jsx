function Info({ tag, data }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="flex flex-wrap gap-x-1 dark:text-whitey">
      <h2 className="font-semibold">{tag}</h2>
      <p className="overflow-auto font-light ">
        {typeof data === "number" ? numberWithCommas(data) : data}
      </p>
    </div>
  );
}

export default Info;
