import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Button from "../Button/Button";
import ConfirmModal from "../ConfirmModal/ConfirmModal"

const AddToCart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); 
  const [deleteIdx, setDeleteIdx] = useState(null);

  const handleIncrease = (idx) => {
    const newCart = [...cart];
    newCart[idx].quantity += 1;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleDecrease = (idx) => {
    const newCart = [...cart];
    if (newCart[idx].quantity > 1) {
      newCart[idx].quantity -= 1;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  // Show modal instead of direct delete
  const handleDeleteClick = (idx) => {
    setDeleteIdx(idx);
    setModalType("delete");
    setModalOpen(true);
  };

  const handleOrderNowClick = () => {
    setModalType("order");
    setModalOpen(true);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    const newCart = cart.filter((_, i) => i !== deleteIdx);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setModalOpen(false);
    setDeleteIdx(null);
  };

  const handleConfirmModal = () => {
    if (modalType === "delete") {
      const newCart = cart.filter((_, i) => i !== deleteIdx);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    if (modalType === "order") {
      setCart([]);
      localStorage.removeItem("cart");
    }
    setModalOpen(false);
    setDeleteIdx(null);
    setModalType("");
  };

  // Cancel modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setDeleteIdx(null);
  };

  return (
    <div className="max-w-[90%] mx-auto px-8 mt-5 py-20 grid">
      <ConfirmModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setDeleteIdx(null);
          setModalType("");
        }}
        onConfirm={handleConfirmModal}
        title={modalType === "order" ? "Order Confirmation" : "Delete Confirmation"}
        message={
          modalType === "order"
            ? "Do you want to place this order?"
            : "Do you really want to remove this item from cart?"
        }
        confirmText={modalType === "order" ? "Yes, Place Order" : "Yes, Delete"}
      />
      {cart.length === 0 ? (
        <p className="text-center col-span-full p-35 text-gray-500 text-xl font-semibold flex flex-col items-center justify-center">
          <span className="text-4xl mb-2">🔍</span>
          Your cart is empty
        </p>
      ) : (
        cart.map((item, idx) => (
          <div key={idx} className="md:flex flex md:flex-row flex-col items-center border border-zinc-300 py-2 gap-10 px-10">
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            <div className="md:flex  justify-between items-center w-full">
              <h3 className="flex font-semibold text-2xl text-zinc-800">
                {item.title}
              </h3>
              <p className="flex text-lg text-zinc-600">{item.category}</p>
              <p className=" text-lg text-zinc-600">{`Price (per kg's): $ ${item.price.toFixed(2)}`}</p>

              {/* Quantity toggle buttons div  */}
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrease(idx)}
                  className="flex-1 bg-zinc-100 text-2xl p-1 font-bold w-10 text-zinc-800 border-1 border-zinc-400 rounded-l-lg cursor-pointer"
                >
                  -
                </button>
                <p className="w-10 text-center text-2xl font-semibold flex-1 bg-zinc-100 py-1 border-y-1 border-zinc-400">
                  {item.quantity > 1 ? item.quantity : "1"}
                </p>
                <button
                  onClick={() => handleIncrease(idx)}
                  className="flex-1 bg-zinc-100 text-2xl p-1 font-bold w-10 text-zinc-800 border-1 border-zinc-400 rounded-r-lg cursor-pointer"
                >
                  +
                </button>
              </div>

              <p className="flex text-xl font-semibold text-zinc-800">
                Total Price: $ {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => handleDeleteClick(idx)}
                className="bg-gradient-to-b from-orange-400 to-orange-600 text-white font-semibold p-2 rounded-lg text-2xl hover:scale-103 hover:to-orange-600 transition-all duration-300 cursor-pointer"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))
      )}

      {/* total Bill div  */}
      {cart.length !== 0 && (
        <div className="md:flex justify-between mt-10 p-5 bg-zinc-100 rounded-lg border border-zinc-300 md:gap-5">
          <h2 className="text-2xl font-semibold">Total Bill</h2>
          <p className="text-xl">Total Items: {cart.length}</p>
          <p className="text-2xl font-semibold">
            {`Total Price: $ ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}`}
          </p>
          <Button content="Order Now" onClick={handleOrderNowClick} />
        </div>
      )}
    </div>
  );
};

export default AddToCart;
