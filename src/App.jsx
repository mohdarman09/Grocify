import React, { useState } from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Grains from "./components/Grains/Grains";
import Layout from "./components/Layout/Layout";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import OurProducts from "./components/OurProducts/OurProducts";
import ContactUs from "./components/ContactUs/ContactUs";
import BuyProductPage from "./components/BuyProductPage/BuyProductPage";
import AddToCart from "./components/AddToCart/AddToCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [searchItem, setSearchItem] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout searchItem={searchItem} setSearchItem={setSearchItem} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/grains",
          element: <Grains />,
        },
        {
          path: "/about-us",
          element: <AboutUsPage />,
        },
        {
          path: "/our-products",
          element: (
            <OurProducts
              searchItem={searchItem}
              setSearchItem={setSearchItem}
            />
          ),
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/add-to-cart",
          element: <AddToCart />,
        },
        {
          path: "/buy-product",
          element: <BuyProductPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default App;
