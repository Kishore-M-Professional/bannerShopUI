import React from "react";
import Logo from "../../assets/Logo-transformed.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container px-3">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="flex items-center font-bold">
                <img src={Logo} alt="Cooking-Logo" className="w-20" />
                Cooking Zone
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <DarkMode />
              </div>

              <ul className="hidden sm:flex gap-2 font-semibold">
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                Order
                <FaCartShopping className="text-white cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
