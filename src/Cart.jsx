import React from "react";
import { useCart } from "./Context/CartContext";
import { Outlet, useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, addCart, removeCart, delCart, totalPrice } = useCart();
  const navigate = useNavigate()

  return (
    <div className="h-screen p-24">
      <h1 className="text-2xl font-bold mb-6">🛍️ Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                className="flex flex-col gap-4 border-b pb-4"
                key={item.id}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ${item.price} × {item.quantity} = Rs:
                       { ( item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => removeCart(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
                      >
                        ➖
                      </button>

                      <button
                        onClick={() => addCart(item)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded cursor-pointer"
                      >
                        ➕
                      </button>

                      <button
                        onClick={() => delCart(item)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded cursor-pointer"
                      >
                        ❌ Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-xl font-bold">
              Total: Rs: {totalPrice().toFixed(2)}
            </h3>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-4 cursor-pointer" onClick={()=>{navigate("/checkout")}}>
              Checkout
            </button>
          </div>
        
        </>
      )}
    </div>
  );
};

export default Cart;

