import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Cart";
import CategoryShop from "./Pages/CategoryShop";
import Checkout from "./Pages/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation";
import NewCollection from "./Components/NewCollection";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        
        { path: "/", element: <Shop /> },
        { path: "/men", element: <CategoryShop category="men" /> },
        { path: "/women", element: <CategoryShop category="women" /> },
        { path: "/kid", element: <CategoryShop category="kid" /> },
        { path: "/loginSignup", element: <LoginSignup /> },
        { path: "/cart", element: <Cart /> },
        
      ],
    },
{ path: "/checkout", element: <Checkout/>},
{path: "/order-confirmation", element: <OrderConfirmation/>},
{path: "/new-collection", element: <NewCollection/>}
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
      
    </>
  );
}

export default App;
