import React, { useEffect, useRef, useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Flex from "../../CommonComponent/Flex";
import Search from "../../CommonComponent/Search";
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../CommonComponent/Button.jsx";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotal,
  RemoveItemCart,
} from "../../../Redux/AllSlice/AddtoCart/AddtoCartSlice.jsx";
import { TbRuler2Off } from "react-icons/tb";

const MenuBar = () => {
  const [showCategories, setshowCategories] = useState(false);
  const [showAccount, setshowAccount] = useState(false);
  const [cart, setcart] = useState(false);
  const dispatcH = useDispatch();
  const MenuRef = useRef();
  const CartRef = useRef();
  const navigate = useNavigate();

  //  MenuRef functionality
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setshowCategories(false);
        setshowAccount(false);
        setcart(false);
      }
      if (CartRef.current.contains(e.target)) {
        setcart(true);
      }
    });
    return () => {
      window.addEventListener("click", () => {});
    };
  }, []);

  // todo : Take all product from redux
  const { TotalAmount, CartItem, TotalCartItem } = useSelector(
    (state) => state.Cart,
  );
  const handleCartChange = () => {
    navigate("/cart");
  };
  useEffect(() => {
    return () => {
      dispatcH(getTotal());
    };
  }, [CartItem]);

  // handlBar functionality //
  const handlCategory = () => {
    setshowAccount(false);
    setshowCategories(!showCategories);
  };

  // handleAccount functionality
  const handlAccount = () => {
    setcart(false);
    setshowCategories(false);
    setshowAccount(!showAccount);
  };

  // handleCart1 functionality //

  const handleCart1 = () => {
    setshowCategories(false);
    setshowAccount(false);
    setcart(!cart);
  };

  // .... todo: handleCartItem function
  // params: ({items: object})

  const handleCartItem = (item) => {
    dispatcH(RemoveItemCart(item));
  };

  const [allProducts, setallProducts] = useState([]);
  //  todo : take a product data from store

  const { data, status } = useSelector((state) => state.productt);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload.products);
    }
  }, [status.payload, data.payload]);

  //  handleSearch function
  const handleSearch = (event) => {
    const { value } = event.target;
    if (value) {
      const searchResult = allProducts.filter((productt) =>
        productt.title.toLowerCase().includes(value.toLowerCase()),
      );
      console.log(searchResult);
    } else {
      console.log("no search result");
    }
  };

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
            </Flex>
            <Search placeHolder="Search product" onSearch={handleSearch} />

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
                <div className="relative">
                  <IoCartOutline className={`${cart && "text-green-600"}`} />
                  <span class="absolute flex h-10 w-10">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span class="absolute -top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-bold">
                      {TotalAmount}
                    </span>
                  </span>
                </div>

                <div
                  className={`absolute left-[-100%] top-[180px] z-10 w-full bg-black bg-secondary_bg_color text-white transition-all lg:w-[20%] ${cart ? "left-[75%]" : null}`}
                >
                  <div
                    ref={CartRef}
                    className="h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-track-secondary_bg_color scrollbar-thumb-sky-700"
                  >
                    {CartItem?.map((item) => (
                      <div className="flex items-center justify-around py-5">
                        <div className="h-[80px] w-[80px] border-2 border-secondary_bg_color bg-secondary_bg_color object-cover">
                          <img src={item.thumbnail} alt={item.thumbnail} />
                        </div>
                        <div className="font-DMsans text-sm font-bold text-black">
                          <h3>
                            {item.title
                              ? `${item.title.slice(0, 15)}..`
                              : "Title missing"}
                          </h3>
                          <span>
                            {item.price ? `$ ${item.price}` : "$44.00"}
                          </span>
                        </div>
                        <div
                          className="text-main_font_color"
                          onClick={() => handleCartItem(item)}
                        >
                          <RxCross2 />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-main_bg_color py-5">
                    <h2 className="text-md ml-4 font-DMsans font-normal text-secondary_font_color">
                      Subtotal:{" "}
                      <span className="ml-4 font-bold text-main_font_color">
                        ${TotalCartItem}
                      </span>
                    </h2>
                    <div className="py-6">
                      <Flex className={"justify-around"}>
                        <Button
                          onCartChange={handleCartChange}
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
