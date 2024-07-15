import Home from "./Pages/Home/Home"
import RootLayout from "./Component/CommonComponent/RootLayout/RootLayout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
    </Route>
  ))

  return (
  <RouterProvider router={router}>
  <Home/>
  </RouterProvider>
  )
}

export default App
