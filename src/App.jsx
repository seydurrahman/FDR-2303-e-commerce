import Home from "./Pages/Home/Home"
import RootLayout from "./Component/CommonComponent/RootLayout/RootLayout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./Pages/Shop/Shop";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
    </Route>
  ))

  return (
  <RouterProvider router={router}>
  <Home/>
  </RouterProvider>
  )
}

export default App
