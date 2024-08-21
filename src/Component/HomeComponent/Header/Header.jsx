import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import Flex from "../../CommonComponent/Flex";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { isPending } from "@reduxjs/toolkit";

const Header = () => {
  const [isShow, setisShow] = useState(false);

  // handleNavIcon functionality//
  const HandleNavIcon = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <div className="px-sm-0 bg-main_bg_color px-5 py-8">
        <div className="container">
          <Flex className="items-center justify-between">
            <div>
              <picture>
                <img src={Logo} alt="Logo.png" />
              </picture>
            </div>
            <div>
              <Flex className={"gap-x-5"}> 
                <ul
                  className={`absolute md:static md:flex-row gap-x-5 ${isShow ? "left-10 top-20 z-10 w-full bg-green-400 text-center transition-all" : "left-[100%] top-20 z-10 text-white lg:text-black"}`}
                >
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/shop"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to={"/about"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to={"/contacts"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Contacts
                  </NavLink>
                  <NavLink
                    to={"/journal"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Journal
                  </NavLink>
                </ul>
              </Flex>
            </div>
            <div></div>
            {/* <div className="cursor-pointer sm:hidden" onClick={HandleNavIcon}>
              {isShow === true ? <RxCross2 /> : <FaBars />}
            </div> */}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Header;
