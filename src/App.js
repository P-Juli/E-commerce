import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";

import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ShopContextProvider from "./context/shop-context";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <HomePage /> }, //shop
        { path: "/cart", element: <Products /> }, // cart
      ],
    },
  ]);

  return(
   <ShopContextProvider><RouterProvider router={router} /></ShopContextProvider>
   ) // change 1
}

export default App;
