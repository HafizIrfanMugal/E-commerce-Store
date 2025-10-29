import React from "react";
import logo from "/public/logo.png";
const Bottom = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center mt-5">
        <img className="w-21" src={logo} alt="" />
        <h2 className="text-3xl text-pink-400 font-bold">ShopeEase</h2>
      </div>
      <ul className="flex justify-center mt-5 gap-3 sm:gap-5 md:gap-10">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5 justify-center mt-10 mb-5">
        <i className="bi bi-instagram text-2xl p-1 px-2 bg-gray-100 rounded-lg cursor-pointer"></i>
        <i className="bi bi-pinterest text-2xl p-1 px-2 bg-gray-100 rounded-lg cursor-pointer"></i>
        <i className="bi bi-whatsapp text-2xl p-1 px-2 bg-gray-100 rounded-lg cursor-pointer"></i>
      </div>
      <div className="border-b-2 border-gray-300 mx-28 mt-10"></div>
      <p className="text-center mt-10">Copyright @ 2025 - All Right Reserved</p>
    </div>
  );
};

export default Bottom;
