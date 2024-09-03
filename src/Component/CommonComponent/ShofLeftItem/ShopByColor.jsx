import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex";

const ShopByColor = ({
  shopLeftTitle,
  shopCategoryItem,
  color,
  dropDownIs,
  dropDownExpandIs,
}) => {
  const [shopColorShow, setshopColorShow] = useState(dropDownExpandIs);
  const handleColor = () => {
    setshopColorShow(!shopColorShow);
  };
  console.log(shopColorShow);
  return (
    <div className="mt-8">
      <div className="mb-7 cursor-pointer" onClick={handleColor}>
        <Flex className={"items-center justify-between"}>
          <h1 className="font-DMsans text-xl font-bold">
            {shopLeftTitle ? shopLeftTitle : "Title missing"}
          </h1>
          {dropDownIs && (
            <div>
              {shopColorShow ? (
                <BiSolidUpArrow className="mr-2" />
              ) : (
                <BiSolidDownArrow className="mr-2" />
              )}
            </div>
          )}
        </Flex>
      </div>
      {shopColorShow && (
        <div className="divide-y-2 divide-solid divide-[#f0f0f0]">
          {shopCategoryItem?.map(
            (item) =>
              item.title !== undefined && (
                <div className="px-2 py-5">
                  <Flex className={"items-center gap-x-3"}>
                    {color && (
                      <div
                        className="h-[11px] w-[11px] rounded-full bg-red-400"
                        style={{ backgroundColor: `${item.colorCode}` }}
                      ></div>
                    )}

                    <h2 className="font-DMsans text-base font-normal text-secondary_font_color">
                      {item.title}
                    </h2>
                  </Flex>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default ShopByColor;
