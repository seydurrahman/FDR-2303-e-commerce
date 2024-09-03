import React, { useEffect, useState } from "react";
import {
  categories,
  shopByColor,
  shopByBrand,
  shopByPrice,
} from "../../../../Data/Data.js";
import ShopCategories from "../../CommonComponent/ShofLeftItem/ShopCategories";
import ShopByColor from "../../CommonComponent/ShofLeftItem/ShopByColor.jsx";
import { useSelector } from "react-redux";

const ShopLeft = ({ className }) => {
  const [allProducts, setallProducts] = useState([]);
  const { data, status } = useSelector((state) => state.productt);
  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload.products);
    }
  }, [status.payload, data.payload]);

  // Search with Shop by category

  let Categoryarr = [];
  let categoriesSet = new Set();
  allProducts.forEach((productt) => {
    if (!categoriesSet.has(productt.category)) {
      Categoryarr.push({
        id: productt.id,
        title: productt.category,
        subcategories: productt.tags,
      });
      categoriesSet.add(productt.category)
    }
  });

    // Search with Shop by brand

  let Brandarr = [];
  let BrandarrSet = new Set();
  allProducts.forEach((productt) => {
    if (!BrandarrSet.has(productt.brand)) {
      Brandarr.push({
        id: productt.id,
        title: productt.brand,
      });
      categoriesSet.add(productt.brand)
    }
  });
  console.log(Brandarr);
  
 

  return (
    <div className={className}>
      <ShopCategories
        categoriesData={Categoryarr ? Categoryarr : []}
        shopLeftTitle="Shop by Category"
      />
      <ShopByColor
        shopLeftTitle={"Shop by Color"}
        shopCategoryItem={shopByColor ? shopByColor : "Title missing"}
        color={true}
        dropDownIs={true}
        dropDownExpandIs={false}
      />
      <ShopByColor
        shopLeftTitle={"Shop by Brand"}
        shopCategoryItem={Brandarr ? Brandarr : "Title missing"}
        color={false}
        dropDownIs={true}
        dropDownExpandIs={false}
      />
      <ShopByColor
        shopLeftTitle={"Shop by Price"}
        shopCategoryItem={shopByPrice ? shopByPrice : "Title missing"}
        color={false}
        dropDownIs={false}
        dropDownExpandIs={true}
      />
    </div>
  );
};

export default ShopLeft;
