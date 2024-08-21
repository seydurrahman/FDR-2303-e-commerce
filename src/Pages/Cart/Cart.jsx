import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Component/CommonComponent/BreadCrumb/BreadCrumb";
import prod5 from "../../assets/Prod-5.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  RemoveItemCart,
  ProductIncrement,
  ProductDecrement,
  getTotal,
} from "../../Redux/AllSlice/AddtoCart/AddtoCartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { CartItem, TotalAmount , TotalCartItem } = useSelector(
    (state) => state.Cart,
  );
  
  useEffect(()=>{
    dispatch(getTotal())
  },[dispatch, CartItem])

  // todo: handleRemove functionality added
  // @parmas: ({item})

  const handleRemove = (item) => {
    dispatch(RemoveItemCart(item));
  };

  // todo: handleIncrementProduct functionality added
  // motive: Increase item
  // @parmas: ({handleIncrementProduct})

  const handleIncrementProduct = (item) => {
    dispatch(ProductIncrement(item));
  };
  const handleDecrementProduct = (item) => {
    dispatch(ProductDecrement(item));
  };
  return (
    <>
      <div className="py-[124px]">
        <div className="container">
          <div className="flex flex-col justify-start gap-y-3">
            <h1 className="font-DMsans text-[49px] font-bold text-main_font_color">
              Cart
            </h1>
            <BreadCrumb />
          </div>
          <div className="mt-[136px] flex items-center justify-between bg-secondary_bg_color py-8">
            <div className="shrink grow basis-60">
              <h2 className="px-20 font-DMsans text-base font-bold text-main_font_color">
                Product
              </h2>
            </div>

            <div className="flex grow basis-60 justify-center">
              <h2 className="font-DMsans text-base font-bold text-main_font_color">
                Price
              </h2>
            </div>

            <div className="flex grow basis-60 justify-center">
              <h2 className="font-DMsans text-base font-bold text-main_font_color">
                Quantity
              </h2>
            </div>

            <div className="flex grow basis-60 justify-center">
              <h2 className="font-DMsans text-base font-bold text-main_font_color">
                Total
              </h2>
            </div>
          </div>

          <div className="h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-secondary_bg_color scrollbar-thumb-sky-700">
            {CartItem?.length > 0
              ? CartItem?.map((item) => (
                  <div className="flex items-center justify-between py-10">
                    <div className="flex shrink grow basis-60 items-center gap-x-5">
                      <span onClick={() => handleRemove(item)}>
                        <MdCancel className="cursor-pointer text-2xl" />
                      </span>
                      <div className="h-20 w-20 rounded-md border-2 border-gray-200 shadow-xl">
                        <picture>
                          <img
                            src={item.thumbnail ? item.thumbnail : prod5}
                            alt={item.thumbnail ? item.thumbnail : prod5}
                            className="h-full w-full rounded-md object-cover"
                          />
                        </picture>
                      </div>
                      <h2 className="font-DMsans text-base font-semibold text-main_font_color">
                        {item.title ? item.title : "xyz"}
                      </h2>
                    </div>

                    <div className="flex shrink grow basis-60 justify-center">
                      <p className="font-DMsans text-base font-bold text-main_font_color">
                        {item.price ? `$${item.price}` : "abc"}
                      </p>
                    </div>

                    <div className="flex shrink grow basis-60 justify-center">
                      <div className="m flex items-center">
                        <div className="flex items-center justify-around gap-x-8 border-2 border-gray-300 px-4 py-2">
                          <span
                            className="cursor-pointer"
                            onClick={() => handleDecrementProduct(item)}
                          >
                            <FaMinus />
                          </span>
                          <h1>
                            {item.cartQuantity ? item.cartQuantity : "nill"}
                          </h1>
                          <span
                            className="cursor-pointer"
                            onClick={() => handleIncrementProduct(item)}
                          >
                            <FaPlus />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink grow basis-60 justify-center">
                      <p className="font-DMsans text-base font-bold text-main_font_color">
                        {`$${item.cartQuantity * item.price}`}
                      </p>
                    </div>
                  </div>
                ))
              : "Nei"}
          </div>

          <div className="py-10">
            <div className="flex justify-end pb-5 text-end">
              <h2 className="font-DMsans text-xl font-bold text-main_font_color">
                Total Cart : {TotalAmount}
              </h2>
            </div>
            <div className="flex justify-end">
              <div className="basis-1/4 border-2 border-secondary_bg_color py-5 text-center">
                <div>
                  <h1 className="text-md font-DMsans font-bold text-main_font_color opacity-70">
                    Sub Total
                  </h1>
                </div>
              </div>
              <div className="basis-1/4 border-2 border-secondary_bg_color py-5 text-end">
                <h2 className="text-md font-DMsans font-bold text-main_font_color opacity-70">
                  {TotalCartItem}
                </h2>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="basis-1/4 border-2 border-secondary_bg_color py-5 text-center">
                <div>
                  <h1 className="font-DMsans text-xl font-bold text-main_font_color">
                    Total
                  </h1>
                </div>
              </div>
              <div className="basis-1/4 border-2 border-secondary_bg_color py-5 text-end">
                <h2 className="font-DMsans text-xl font-bold text-main_font_color">
                  {TotalAmount}
                </h2>
              </div>
            </div>
          </div>

          <div className="text-end">
            <button className="rounded-sm bg-main_font_color px-[16px] py-[32px] font-DMsans text-xl text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
