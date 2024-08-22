import React from "react";
import Flex from "../../CommonComponent/Flex.jsx";
import Saleleft from "../../../assets/Saleleft.png";
import Electronicwatch from "../../../assets/Electronicwatch.png";
import Furniture from "../../../assets/Furniture.png";
import Overlay from "../../CommonComponent/Overlay.jsx";
const SaleInfo = () => {
  return (
    <>
      <div className="py-10 sm:py-10">
        <div className="container">
          <Flex className={"flex-col sm:flex-row sm:gap-x-5  lg:gap-x-10 gap-y-4"}>
            <div className="relative w-full">
              <picture>
                <img src={Saleleft} alt={Saleleft} />
              </picture>
              <Overlay
                className={"bottom-5 sm:bottom-10 md:bottom-16 left-5"}
                title="Phones Sale"
                discountDetailsFirst="Up to"
                discountDetailsLast={`sales for all phones!`}
                discountAmount="30%"
                btnTitle="Shop now"
              />
            </div>
            <div className="w-full">
              <Flex className={"flex-col gap-y-4 lg:gap-y-6 xl:gap-y-10"}>
                <div className="relative w-full">
                  <picture>
                    <img src={Electronicwatch} alt={Electronicwatch} />
                  </picture>
                  <Overlay
                    className={"top-4 lg:top-20 sm:top-1 left-5 "}
                    title="Electronics sale"
                    discountDetailsFirst="Up to"
                    discountDetailsLast={`sales for all electronics!`}
                    discountAmount="70%"
                    btnTitle="Shop now"
                  />
                </div>
                <div className="relative w-full">
                  <picture>
                    <img src={Furniture} alt={Furniture} />
                  </picture>
                  <Overlay
                    className={"left-5 top-1/2 -translate-y-1/2"}
                    title="Furniture offer"
                    discountDetailsFirst="Up to"
                    discountDetailsLast={`sales for all furniture item!`}
                    discountAmount="50%"
                    btnTitle="Shop now"
                  />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default SaleInfo;
