import { Link } from "react-router-dom";

function Navbar({ theme, handleThemeSwitch }) {
  return (
    <div className="flex justify-between w-full px-[18px] 660:px-[35px] 1050:px-[75px] bg-whitey dark:bg-blue py-7 1340:px-[90px]  shadow-[0px_7px_5px_-4px_rgba(0,0,0,0.05)]">
      <Link to="/">
        <span className="text-[14px] font-semibold 1050:text-lg cursor-pointer dark:text-whitey">
          Where in the world?
        </span>
      </Link>
      <div
        className="flex gap-x-1.5 items-center 1050:gap-x-2.5 cursor-pointer"
        onClick={handleThemeSwitch}
      >
        {theme === "light" && (
          <ion-icon
            src="../../moon-outline.svg"
            class=" hydrated text-[14px] 1050:text-[18px]"
          ></ion-icon>
        )}
        {theme === "dark" && (
          <ion-icon
            src="../../moon.svg"
            class=" hydrated text-[14px] 1050:text-[18px] fill-yellow-400"
          ></ion-icon>
        )}

        <span className="text-xs 1050:text-base dark:text-whitey">
          Dark Mode
        </span>
      </div>
    </div>
  );
}

export default Navbar;
