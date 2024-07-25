import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    data: [],
  }


  export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
      setProducts: (state, payload)=>{
        state.data = payload


            }
        }
    })

//  make a thunk function for getting data


    // Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions
export default productSlice.reducer