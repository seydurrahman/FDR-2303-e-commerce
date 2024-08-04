import { createSlice } from '@reduxjs/toolkit'

const ApiStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
}

const initialState= {
    data: {},
    status : ApiStatus.IDLE,
  }


  export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
      setProducts: (state, payload)=>{
        state.data = payload
            },
          setStatus : (state, payload) => {
            state.status = payload
          },
        },
    })

//  make a thunk function for getting data
  export const FetcherProduct =(apiUrl)=>{
      return async function GetProduct(dispatch, getState){
      try {
        dispatch(setStatus(ApiStatus.LOADING))
        const response = await fetch(apiUrl)
        const data = await response.json()
        dispatch(setProducts(data))
        dispatch(setStatus(ApiStatus.IDLE))
      } catch (error) {
        dispatch(setStatus(ApiStatus.ERROR))
      } 
      
    }
  }
    // Action creators are generated for each case reducer function
export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer