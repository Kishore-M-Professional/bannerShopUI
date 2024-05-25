import React, { useEffect, useState } from "react";
import DarkButton from "../../assets/dark-mode-button.png";
import LightButton from "../../assets/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="relative mx-3">
      <img
        src={DarkButton}
        alt="Dark Theme"
        onClick={changeTheme}
        className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 ${theme === "dark"?"opacity-100":"opacity-0"}`}
      />
      <img
        src={LightButton}
        alt="Light Theme"
        onClick={changeTheme}
        className="w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
