import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../CommonComponent/Button";
import Flex from "../CommonComponent/Flex";
import ProductDetailing from "../CommonComponent/ProductDetailing/ProductDetailing";
import Review from "../CommonComponent/ProductDetailing/Review";
const ProductInfo = ({ productStock, onAddtoCart }) => {
  const colorItem = [
    { id: 1, colorCode: "#979797" },
    { id: 2, colorCode: "#ff8686" },
    { id: 3, colorCode: "#7ed321" },
    { id: 4, colorCode: "#b6b6b6" },
    { id: 5, colorCode: "#15cba5" },
  ];

  return (
    <div className="mt-5 flex flex-col gap-y-10">
      <div>
        <div className="flex items-center gap-x-4">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            COLOR:
          </h1>
          {colorItem?.map((color) => (
            <div
              className={`h-[20px] w-[20px] transform-gpu cursor-pointer rounded-full hover:scale-150`}
              style={{ background: color.colorCode }}
            ></div>
          ))}
        </div>
        <hr className="mt-4 opacity-75" />
      </div>

      {/* Size component */}
      <div>
        <div className="flex items-center gap-x-14">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            SIZE:
          </h1>
          <select
            name="ProductSize"
            id="ProductSize"
            className="w-[9%] border border-gray-300 py-2"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <hr className="mt-4 opacity-75" />
      </div>

      {/* Size Component */}

      {/* Quantity component */}
      <div>
        <div className="flex items-center gap-x-3">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            QUANTITY:
          </h1>
          <div className="flex w-[9%] items-center justify-around border-2 border-gray-300 py-2">
            <span className="cursor-pointer">
              <FaMinus />
            </span>
            <h1>1</h1>
            <span className="cursor-pointer">
              <FaPlus />
            </span>
          </div>
        </div>
        <hr className="mt-4 opacity-75" />
      </div>

      {/* Quantity component */}

      {/* Stock Status component */}
      <div>
        <div className="flex items-center gap-x-3">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            STATUS:
          </h1>
          <div>
            <p>{productStock} in Stock</p>
          </div>
        </div>
        <hr className="mt-4 opacity-75" />
      </div>

      {/* Stock Status component */}

      {/* Wishlist and add to cart component */}
      <Flex className={"gap-x-5"}>
        <Button
          title={"Add to Wish List"}
          className={
            "rounded border-2 border-main_font_color px-[47px] py-5 font-DMsans font-bold text-main_font_color"
          }
        />

        <button
          className={
            "rounded border-2 border-main_font_color bg-main_font_color px-[67px] py-5 font-DMsans font-bold text-main_bg_color"
          }
          onClick={onAddtoCart}
        >
          Add to Cart
        </button>
      </Flex>

      {/* Wishlist and add to cart component */}

      {/* Drop down component */}
      <ProductDetailing title={"FEATURE & DETAILS"} />
      <ProductDetailing title={"SHIPPING & RETURNS"} />
      {/* Drop down component */}

      {/* Review component */}
      <Review />

      {/* Review component */}
    </div>
  );
};

export default ProductInfo;
