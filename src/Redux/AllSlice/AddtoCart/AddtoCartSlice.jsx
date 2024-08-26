import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";
const initialState = {
  CartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  TotalCartItem: 0,
  TotalAmount: 0,
};

export const addtoSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findIndex = state.CartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (findIndex >= 0) {
        state.CartItem[findIndex].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
        toast.info(`${action.payload.title} Again Added Cart`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        const temporary = { ...action.payload, cartQuantity: 1 };
        state.CartItem.push(temporary);
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
        toast(`${action.payload.title} Added to Cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    RemoveItemCart: (state, action) => {
      const removeitem = state.CartItem.filter(
        (item) => item.id !== action.payload.id,
      );
      state.CartItem = removeitem;
      localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
      toast.error(`${action.payload.title} Remove Cart`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    ProductIncrement: (state, action) => {
      const findIndex = state.CartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (findIndex >= 0) {
        state.CartItem[findIndex].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
        toast.success(`${action.payload.title} increment`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    ProductDecrement: (state, action) => {
      const findIndex = state.CartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (state.CartItem[findIndex].cartQuantity > 1) {
        state.CartItem[findIndex].cartQuantity -= 1;
        toast.error(`${action.payload.title} decremetn`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
      }
    },
    getTotal: (state, action) => {
      const totalCart = state.CartItem.reduce(
        (totalCart, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalCartPrice = cartQuantity * price;

          totalCart.totalAmount += Math.round(totalCartPrice);
          totalCart.totaItem += cartQuantity;
          return totalCart;
        },
        {
          totalAmount: 0,
          totaItem: 0,
        },
      );
      state.TotalCartItem = totalCart.totalAmount;
      state.TotalAmount = totalCart.totaItem;
    },
  },
});

export const {
  addtoCart,
  RemoveItemCart,
  ProductIncrement,
  ProductDecrement,
  getTotal,
} = addtoSlice.actions;
export default addtoSlice.reducer;
