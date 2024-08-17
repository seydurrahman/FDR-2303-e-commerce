import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../AllSlice/ProductSlice/ProductSlice'
import AddtoCartSlice from '../AllSlice/AddtoCart/AddtoCartSlice'
import Cart from '../../Pages/Cart/Cart'

export const store = configureStore({
  reducer: {
    Cart: AddtoCartSlice,
    productt: ProductSlice,
  },
})