import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-green-600">
        ✅ Order Placed Successfully!
      </h1>
      <p className="mb-6 text-gray-600">
        Thank you for shopping with us. Your order will be delivered soon.
      </p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
