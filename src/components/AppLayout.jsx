import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import BorderContext from "../contexts/BorderContext";
import CountryListLoaderContext from "../contexts/CountryListLoaderContext";

import Navbar from "./Navbar";

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const [countries, setCountries] = useState([]);

  const [theme, setTheme] = useState(() => {
    const themeFromLocalStorage = localStorage.getItem("theme");
    return themeFromLocalStorage ? themeFromLocalStorage : "light";
  });

  useEffect(function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  useEffect(
    function () {
      function getThemeFromLocalStorage() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }
      getThemeFromLocalStorage();

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.style.setProperty(
          "--text",
          "hsl(0, 0%, 100%)"
        );
        document.documentElement.style.setProperty(
          "--bg",
          "hsl(207, 26%, 17%)"
        );
      }
      if (theme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.setProperty(
          "--text",
          "hsl(200, 15%, 8%)"
        );
        document.documentElement.style.setProperty("--bg", "hsl(0, 0%, 98%)");
      }
    },
    [theme]
  );

  function handleThemeSwitch() {
    if (isLoading) return;
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  return (
    <CountryListLoaderContext.Provider
      value={{ isLoading: isLoading, setIsLoading: setIsLoading }}
    >
      <div className="dark:bg-darkBlue text-darkestBlue">
        <Navbar
          theme={theme}
          setTheme={setTheme}
          handleThemeSwitch={handleThemeSwitch}
        />

        <BorderContext.Provider
          value={{ countries: countries, setCountries: setCountries }}
        >
          <Outlet />
        </BorderContext.Provider>
      </div>
    </CountryListLoaderContext.Provider>
  );
}

export default AppLayout;
