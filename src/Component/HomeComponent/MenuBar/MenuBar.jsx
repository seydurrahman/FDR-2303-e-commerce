import React, { useEffect, useRef, useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Flex from "../../CommonComponent/Flex";
import Search from "../../CommonComponent/Search";
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import cartItem from "../../../assets/Prod-12.png";
import Button from "../../CommonComponent/Button.jsx";
import { RxCross2 } from "react-icons/rx";

const MenuBar = () => {
  const [showCategories, setshowCategories] = useState(false);
  const [showAccount, setshowAccount] = useState(false);
  const [cart, setcart] = useState(false);
  const MenuRef = useRef()

  // handlBar functionality //
  const handlCategory = () => {
    setshowAccount(false)
    setshowCategories(!showCategories);
  };

  // handleAccount functionality
  const handlAccount = () => {
    setcart(false)
    setshowCategories(false)
    setshowAccount(!showAccount);
  };

  // handleCart1 functionality //

  const handleCart1 = () => {
    setshowCategories(false)
    setshowAccount(false)
    setcart(!cart);
  };

  //  MenuRef functionality
  console.log(MenuRef.current);
  useEffect(()=>{
    window.addEventListener("click",(e)=>{
      if(!MenuRef.current.contains(e.target)){
        setshowCategories(false)
        setshowAccount(false)
        setcart(false);
      }
      
    })
  })
  

  return (
    <>
      <div className="px-sm-0 bg-secondary_bg_color px-4 py-5" ref={MenuRef}>
        <div className="container">
          <Flex className={"items-center justify-between gap-x-3"}>
            <Flex className={"gap-x-2"}>
              <div onClick={handlCategory}>
                <HiMiniBars3BottomLeft
                  className={`cursor-pointer text-2xl ${showCategories && "text-red-400"}`}
                />
              </div>
              <p className="sm:menuItem hidden cursor-pointer text-[14px] text-main_font_color sm:block">
                Shop by Category
              </p>
              <div>
                <ul
                  className={`absolute top-[180px] z-10 w-[100vw] divide-y divide-solid bg-black py-5 text-main_bg_color transition-all ${showCategories ? "left-0" : "left-[-120%]"}`}
                >
                  <li className="p-5">
                    <Link to={"/"}>Accesories</Link>
                  </li>
                  <li className="p-5">
                    <Link to={"/"}>Furniture</Link>
                  </li>
                  <li className="p-5">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="p-5">
                    <Link to={"/abc"}>Home</Link>
                  </li>
                  <li className="p-5">
                    <Link to={"/"}>Home</Link>
                  </li>
                </ul>
              </div>
              <h2 className="menuItem hidden cursor-pointer text-main_font_color md:block">
                Shop by Category
              </h2>
            </Flex>
            <Search placeHolder="Search product" />

            <Flex className={"gap-x-2 sm:gap-x-5"}>
              <div onClick={handlAccount}>
                <Flex
                  className={"cursor-pointer items-center gap-x-1 sm:gap-x-2"}
                >
                  <div>
                    <FaUser
                      className={`${showAccount ? "text-green-300" : null}`}
                    />
                  </div>
                  <div>{showAccount ? <FaChevronUp /> : <FaChevronDown />}</div>
                </Flex>
                {showAccount && (
                  <div>
                    <ul className="absolute left-0 top-[185px] z-10 w-full divide-y divide-solid bg-gray-700 py-5 text-center text-white sm:w-[200px]">
                      <li className="py-4">
                        <Link to={"/"}>My Account</Link>
                      </li>
                      <li className="PY-4">
                        <Link to={"/"}>Log Out</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="cursor-pointer" onClick={handleCart1}>
                <IoCartOutline className={`${cart && "text-green-600"}`} />

                <div className={`absolute left-[-100%] transition-all top-[180px] z-10 w-full bg-black bg-secondary_bg_color text-white ${cart ? "left-[0%]" : null}`}>
                  <div className="flex items-center justify-around py-5">
                    <div className="h-[80px] w-[80px] bg-secondary_bg_color object-cover border-2 border-secondary_bg_color">
                      <img src={cartItem} alt={cartItem} />
                    </div>
                    <div className="text-black font-DMsans font-bold text-sm">
                      <h3>Black Smart Watch</h3>
                      <span>$44.00</span>
                    </div>
                    <div className="text-main_font_color">
                      <RxCross2 />
                    </div>
                  </div>

                  <div className="bg-main_bg_color py-5">
                    <h2 className="text-md font-DMsans font-normal text-secondary_font_color ml-4">
                      Subtotal:{" "}
                      <span className="ml-4 font-bold text-main_font_color">
                        $44.00
                      </span>
                    </h2>
                    <div className="py-6">
                      <Flex className={"justify-around"}>
                        <Button
                          title={"View cart"}
                          className={
                            "font-sm border-2 border-main_font_color px-10 py-4 font-DMsans font-bold text-black"
                          }
                        ></Button>
                        <Button
                          title={"Checkout"}
                          className={
                            "font-sm bg-black px-10 py-4 font-DMsans font-bold text-white"
                          }
                        ></Button>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
