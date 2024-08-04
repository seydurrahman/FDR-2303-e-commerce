import Home from "./Pages/Home/Home"
import RootLayout from "./Component/CommonComponent/RootLayout/RootLayout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product-details/:productId" element={<ProductDetails/>}/>
    </Route>
  ))

  return (
  <RouterProvider router={router}>
  <Home/>
  </RouterProvider>
  )
}

export default App
