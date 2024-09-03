import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Flex from "../Flex";

const ShopCategories = ({ categoriesData, shopLeftTitle }) => {
  const [showCategories, setshowCategories] = useState(
    categoriesData.map(() =>!true),
  );
  useEffect(()=>{
    console.log(showCategories);
    
  },[showCategories])

  const handleCategoriesToggle = (idx) => {
    setshowCategories((previousState) => {
      return previousState.map((value, index) =>
        idx === index ? !value : false,
      );
    });
  };

  
  return (
    <>
      <div>
        <h1 className="mb-9 font-DMsans text-xl font-bold">
          {shopLeftTitle ? shopLeftTitle : "Title is missing"}
        </h1>
      </div>

      <div>
        <div className="divide-y-2 divide-solid divide-[#f0f0f0]">
          {categoriesData?.map((item, index) =>
            item.subcategories.length > 0 ? (
              <div>
                <div
                  className="cursor-pointer px-3 py-5"
                  key={item.id}
                  onClick={() => handleCategoriesToggle(index)}
                >
                  <Flex className={"items-center justify-between"}>
                    <h2 className="font-DMsans text-base font-normal text-secondary_font_color">
                      {item.title}
                    </h2>
                    <FaPlus className="text-secondary_font_color" />
                  </Flex>
                </div>
                <div className={`${showCategories[index] && "mb-4"}`}>
                  {showCategories[index] &&
                    item.subcategories.map(
                      (subitem) =>
                        subitem !== item.title && (
                          <div
                            className="cursor-pointer px-3 py-2"
                            key={subitem}
                          >
                            <h2 className="font-DMsans text-base font-normal text-secondary_font_color">
                              {subitem}
                            </h2>
                          </div>
                        ),
                    )}
                </div>
              </div>
            ) : (
              <div className="cursor-pointer px-3 py-5">
                <h2 className="font-DMsans text-base font-normal text-secondary_font_color">
                  {item.title}
                </h2>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCategories;
