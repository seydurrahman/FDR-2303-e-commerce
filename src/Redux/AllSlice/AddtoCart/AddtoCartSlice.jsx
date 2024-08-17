import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from 'react-toastify';
const initialState = {
  CartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")): [],
  TotalCartItem: 0,
  TotalAmount: 0,
};

export const addtoSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findIndex = state.CartItem.findIndex((item)=>{
        return item.id === action.payload.id;
      });
      if (findIndex >= 0){
        state.CartItem[findIndex].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem))
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
      } else{
        const temporary = { ...action.payload, cartQuantity: 1 }
        state.CartItem.push(temporary);
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem))
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
    RemoveItemCart:(state, action)=>{
      const removeitem = state.CartItem.filter(
        (item)=> item.id !== action.payload.id
      )
      state.CartItem = removeitem
      localStorage.setItem("cartItem", JSON.stringify(state.CartItem))
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
    }
  },
});

export const { addtoCart, RemoveItemCart } = addtoSlice.actions;
export default addtoSlice.reducer;
