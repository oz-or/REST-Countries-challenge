import { Link } from "react-router-dom";

import Navbar from "../Navbar";
import Btn from "./BackBtn";

function Error404() {
  return (
    <div className="dark:bg-darkBlue text-darkestBlue dark:text-whitey">
      <Navbar />
      <div className="flex flex-col items-center pt-32 text-center 660:pt-24 gap-y-8 1050:gap-y-12">
        <div className="flex flex-col gap-y-2 1050:gap-y-6">
          <span className="text-red-600 text-7xl 660:text-9xl">404</span>
          <h1 className="text-3xl 660:text-5xl">
            That page doesn&apos;t exist!
          </h1>
          <span className="">
            Sorry,the page you were looking for <br className="660:hidden" />
            could not be found.
          </span>
        </div>
        <div className="flex gap-x-8">
          <Btn>Back</Btn>
          <Link to="/">
            <Btn>Home</Btn>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
