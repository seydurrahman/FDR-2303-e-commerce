import Home from "./Pages/Home/Home";
import RootLayout from "./Component/CommonComponent/RootLayout/RootLayout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Registration from "./Pages/Registration/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />,
      <Route path="/cart" element={<Cart />} />
      <Route path="/registration" element={<Registration />}></Route>,
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/*" element={<h1>Error page</h1>}></Route>
    </Route>,
  ),
);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
