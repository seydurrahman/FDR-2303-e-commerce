import React from "react";
import product1 from "../../assets//Prod1.png";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { ProductData } from "../../../Data/Data";
import { Link } from "react-router-dom";

const Product = ({
  colorVariant,
  badge,
  imga,
  productName,
  productPrice,
  productId,
}) => {
  const handleAddToCart = (event) => {
    event.stopPropagationS();
  };
  return (
    <div className="w-full sm:px-0">
      <div className="group relative cursor-pointer overflow-hidden pb-6 sm:w-[95%]">
        <div className="absolute left-4 top-4 rounded-sm">{badge}</div>
        <Link to={`/product-details/${productId}` }>
          <picture>
            <img src={imga} alt={imga} className="h-full w-full object-cover" />
          </picture>
        </Link>

        <div className="absolute -bottom-[40%] left-0 w-full bg-purple-100 transition-all group-hover:bottom-6">
          <div className="flex flex-col items-end justify-end p-6">
            <div>
              <Flex className={"items-center gap-x-5"}>
                <h5>Add to wish list</h5>
                <span>
                  <FaHeart />
                </span>
              </Flex>
            </div>
            <div>
              <Flex className={"items-center gap-x-2"}>
                <h5>Compare</h5>
                <span>
                  <IoIosGitCompare />
                </span>
              </Flex>
            </div>
            <div onClick={handleAddToCart}>
              <Flex className={"items-center gap-x-2"}>
                <h5>Add to cart</h5>
                <span>
                  <IoCart />
                </span>
              </Flex>
            </div>
          </div>
        </div>
      </div>
      <Flex className={"justify-between"}>
        <h1>{productName ? productName : "Basic crew neck tee"}</h1>
        <p>{productPrice ? `$${productPrice}` : "$44.00"}</p>
      </Flex>
      {colorVariant && <span>Black</span>}
    </div>
  );
};

export default Product;
