import { useState } from "react";

import CountryList from "./CountryList/CountryList";
import SearchFilter from "./SearchFilter";

function Home() {
  const [region, setRegion] = useState("Filter by Region");
  const [input, setInput] = useState("");

  return (
    <div>
      <SearchFilter
        input={input}
        setInput={setInput}
        region={region}
        setRegion={setRegion}
      />

      <CountryList input={input} region={region} />
    </div>
  );
}

export default Home;
