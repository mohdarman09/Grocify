import React from "react";
import Button from "../Button/Button";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyProductPage = () => {
  const [quantity, setQuantity] = React.useState(1);
  const [orderModalOpen, setOrderModalOpen] = React.useState(false);

  const location = useLocation();
  const { image, title, price, category } = location.state || {};

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cart.findIndex((item) => item.title === title);

    if (itemIndex === -1) {
      cart.push({ image, title, price, category, quantity });
      toast.success("Item added to cart!");
    } else {
      cart[itemIndex].quantity += quantity;
      toast.info("Item quantity increased!");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleBuyNow = () => {
    setOrderModalOpen(true);
  };

  const handleOrderConfirm = () => {
    setOrderModalOpen(false);
    toast.success(`Order placed for ${quantity} kg's of ${title}!`);
  };

  const handleOrderCancel = () => {
    setOrderModalOpen(false);
  };

  return (
    <div className="mt-15 max-w-[90%] mx-auto px-8 md:flex">
      <ConfirmModal
        open={orderModalOpen}
        onClose={handleOrderCancel}
        onConfirm={handleOrderConfirm}
      />
      {/* image div  */}
      <div className="flex justify-center items-center md:w-[45%] w-[100%] object-contain">
        <img src={image} alt={title} />
      </div>

      {/* ditails div  */}
      <div className="md:w-[55%] w-[100%] md:p-10 my-15 gap-2 flex flex-col justify-center items-start">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <h2 className="text-2xl ">Category: {category}</h2>

        <div className="flex items-center">
          {/* Quantity (kg's) */}
          <p className="text-xl">Quantity (kg's): </p>
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="border border-gray-300 rounded-l-md px-3 py-1 font-bold text-3xl cursor-pointer ml-5 bg-zinc-100"
          >
            -
          </button>
          <p className="text-xl font-semibold border border-gray-300 px-4 py-2 bg-zinc-100">{quantity}</p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border border-gray-300 rounded-r-md px-3 py-1 font-bold text-3xl cursor-pointer bg-zinc-100"
          >
            +
          </button>
        </div>

        <h3 className="text-2xl mb-2">Price (per kg): $ {price}</h3>
        <h1 className="text-3xl mb-5">Total Price: $ {(price * quantity).toFixed(2)}</h1>

        <div className="flex w-full gap-8 justify-between items-center">
          <Button content='Buy Now' onClick={handleBuyNow} />
          <Button content='Add to Cart' onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default BuyProductPage;
