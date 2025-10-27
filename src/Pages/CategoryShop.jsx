import React from "react";
import { useState } from "react";
import { products } from "../Components/Assets/Product";
import { banner } from "../Components/Assets/Product";
import { useCart } from "../Context/CartContext";
const CategoryShop = ({ category }) => {
  const { addCart } = useCart();
  const dressFiltered = products.dresses.filter(
    (item) => item.category === category
  );
  const footwearFiltered = products.footwear.filter(
    (item) => item.category === category
  );
  const banners = banner.filter((item) => item.category === category);
  return (
    <div className="mt-5 p-5 md:p-24">
      {banners.map((item) => (
        <div
          key={item.id}
          className="flex justify-around items-center h-60 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-100"
        >
          <div>
            <span className="text-4xl font-bold text-orange-500">
              FLAT 50% OFF
            </span>
            <p className="">12 Hours 20 Mins</p>
            <button className="bg-orange-500 p-2 text-white text-xs px-5 mt-4 rounded-3xl">
              Explore Now{" "}
            </button>
          </div>
          <img className="hidden sm:block h-60 mix-blend-darken" src={item.image} alt="" />
        </div>
      ))}
      <h1 className="text-3xl font-bold mt-8 text-orange-500">Dresses</h1>
      <div className="flex flex-wrap justify-center mt-5 gap-10 ">
        {dressFiltered.map((item) => (
          <div
            key={item.id}
            className=" w-60 p-4 sm:w-70 md:w-80 rounded-lg bg-white shadow cursor-pointer hover:shadow-2xl hover:shadow-gray-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-contain"
            />
            <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
            <p>Rs: {item.price}</p>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded mt-2 flex cursor-pointer"
              onClick={() => {
                addCart(item);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold mt-8 text-orange-500">FOOTWEAR</h1>
      <div className="flex flex-wrap justify-center  mt-5 gap-10">
        {footwearFiltered.map((item) => (
          <div
            key={item.id}
            className="w-60 p-4 sm:w-70 md:w-80 rounded-lg bg-white shadow cursor-pointer hover:shadow-2xl hover:shadow-gray-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-contain"
            />
            <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
            <p>Rs: {item.price}</p>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded mt-2 cursor-pointer "
              onClick={() => {
                addCart(item);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryShop;
