import React, { useContext, useEffect, useState } from "react";
import Product from "../Product";
import prod11 from "../../../assets/Prod-11.png";
import Button from "../Button";
import { ShopRightPageNumberContext } from "../../ShopComponent/ShopRight/ShopRight.jsx";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FetcherProduct } from "../../../Redux/AllSlice/ProductSlice/ProductSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading.jsx";
import { addtoCart } from "../../../Redux/AllSlice/AddtoCart/AddtoCartSlice.jsx";

const ShopRightBottom = () => {
  const dispatch = useDispatch();
  const value = useContext(ShopRightPageNumberContext);
  const { perPageItem, GridLayout } = value;
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    dispatch(FetcherProduct("https://dummyjson.com/products"));
  }, []);

  const { data, status } = useSelector((state) => state.productt);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload.products);
    }
  }, [status.payload, data.payload]);

  // handlePagination functionality //

  const handlePagination = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / perPageItem) + 1
    ) {
      setpage(pageNumber);
    }
  };

  // todo: handleAddtoCart function
  //  params: ({item})

  const handleAddtoCart = (item) => {
    dispatch(addtoCart(item));
  };

  return (
    <>
      <div className="mt-10">
        {status.payload == "LOADING" ? (
          <Loading className={"w-[33%]"} perItem={9} />
        ) : status.payload === "ERROR" ? (
          <h1 className="flex h-[100vh] items-center justify-center bg-red-200 text-white">
            Error page 404
          </h1>
        ) : (
          allProducts && (
            <div>
              <div className="flex flex-wrap justify-between gap-y-7">
                {allProducts
                  ?.slice(page * perPageItem - perPageItem, page * perPageItem)
                  .map((productItem) => (
                    <div
                      className={`${GridLayout ? "w-full" : "w-[32%]"}`}
                      key={productItem.id}
                    >
                      <Product
                        onaddToCart={() => handleAddtoCart(productItem)}
                        productId={productItem.id}
                        imga={productItem.thumbnail}
                        colorVariant={"White"}
                        productName={productItem.title}
                        productPrice={productItem.price}
                        badge={
                          <Button
                            title={
                              productItem.discountPercentage
                                ? `$${productItem.discountPercentage}`
                                : productItem.stock === 0
                                  ? "Stock out"
                                  : "New"
                            }
                            className={"bg-black px-8 py-2 text-white"}
                          />
                        }
                      />
                    </div>
                  ))}
              </div>
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-x-2">
                    <p
                      className={`flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-md bg-red-200 text-main_bg_color`}
                      onClick={() => handlePagination(page - 1)}
                    >
                      <MdKeyboardDoubleArrowLeft />
                    </p>
                    {[
                      ...new Array(
                        Math.floor(allProducts.length / perPageItem) + 1,
                      ),
                    ].map((item, index) => (
                      <div>
                        <p
                          className={`flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-md bg-black text-main_bg_color ${index + 1 === page && "rounded-md bg-blue-300 text-main_font_color"}`}
                          onClick={() => handlePagination(index + 1)}
                        >
                          {index + 1}
                        </p>
                      </div>
                    ))}
                    <p
                      className={`flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-md bg-red-200 text-main_bg_color`}
                      onClick={() => handlePagination(page + 1)}
                    >
                      <MdKeyboardDoubleArrowRight />
                    </p>
                  </div>
                  <div>
                    <p>{`Products from ${page * perPageItem - perPageItem + 1} to ${page === Math.floor(allProducts.length / perPageItem) + 1 ? allProducts.length : page * perPageItem} of ${allProducts.length}`}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ShopRightBottom;
