import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ image, title, price, category }) => {
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isInCart = cart.some((item) => item.title === title);
    setAddToCart(isInCart);
  }, [title]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cart.findIndex((item) => item.title === title);

    if (itemIndex === -1) {
      //  add with quantity 1
      cart.push({ image, title, price, category, quantity: 1 });
      setAddToCart(true);
      toast.success("Item added to cart!");
    } else {
      // Item already in cart, increase quantity
      cart[itemIndex].quantity += 1;
      toast.info("Item quantity increased!");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      <div className="flex justify-end">
        <span
          onClick={handleAddToCart}
          className={`text-3xl cursor-pointer ${
            addToCart ? "text-orange-500" : "text-zinc-400"
          }`}
        >
          <FaCartPlus />
        </span>
      </div>
      <div className="w-full h-50">
        <img
          className="h-full w-full mx-auto object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="text-center mt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg font-bold my-1">${price.toFixed(2)}</p>
        <NavLink to="/buy-product" state={{ image, title, price, category }}>
          <Button content="Buy Now" />
        </NavLink>
      </div>
    </div>
  );
};

export default Cards;