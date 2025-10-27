import React from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const newOrder = {
      id: Date.now(),
      items: cart,
      user: data,
      date: new Date().toLocaleString(),
      status: "pending",
    };
    const existing = JSON.parse(localStorage.getItem("order")) || [];
    localStorage.setItem("order", JSON.stringify([...existing, newOrder]));
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/order-confirmation");
  };
  return (
    <>
      <div className="text-center h-screen bg-pink-200">
        <h1 className="text-2xl font-bold">Checkout</h1>
        {cart.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 flex flex-col gap-5 p-2 py-10 text-center m-auto mt-8 rounded-2xl bg-white"
          >
            <h2 className="text-white">Enter Your Details</h2>
            <div>
              <input
                className="border rounded-lg p-3 w-3/4 "
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "full name is required",
                  minLength: {
                    value: 3,
                    message: "name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "name can not exceeds 16 characters",
                  }
                })}
              />
           {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}
                </p>
                )}
            </div>
            <div>
              <textarea
                className="p-3 border rounded-lg w-3/4 "
                placeholder="Delivery address"
                {...register("address", {required:"Address required"})}
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
            <div>
              <input
                className="border rounded-lg p-3 w-3/4"
                type="text"
                placeholder="Phone number"
                {...register("number", {required:"Phone number required", pattern: {
                  value:/^[0-9]{10,13}$/,
                  message: "Enter a valid phone number",
                }})}
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
              )}
            </div>
            <div>
              <select
                className="border rounded-lg p-2 w-3/4"
                name=""
                id=""
                {...register("payment",{ required: "select payment method" })}
              >
                <option value="">Select payment method..</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Credit/Debit Card">Credit/Debit Card</option>
                <option value="Easypesa / JazzCash ">
                  Easypesa / JazzCash
                </option>
              </select>
            </div>
           <h3 className="text-xl font-semibold">Total = Rs. {totalPrice().toFixed(2)}</h3>
           <button className="bg-pink-300 w-25 p-2 rounded-sm self-center cursor-pointer hover:bg-pink-400" type="submit">Place order</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Checkout;
