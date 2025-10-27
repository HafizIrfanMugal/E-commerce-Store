import React, { useState, useEffect } from "react";
import logo from "./Assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Kid from "../Pages/Kid";
import LoginSignup from "../Pages/LoginSignup";
import Cart from "../Cart";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
const Navbar = () => {
  const { loggedUser, logout } = useAuth();
  const {cart}= useCart()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    return navigate("/LoginSignup");
  };
  return (
    <>
      <nav className="flex justify-around items-center align-center bg-white border-b-2 border-gray-300 h-22 fixed top-0 left-0 w-full shadow-md z-50">
        <div className="flex items-center">
          <img className="w-16 sm:w-18 md:w-21" src={logo} alt="" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-pink-400 font-bold">ShopeEase</h2>
        </div>
        <div className="hidden md:block">
        <ul className=" flex md:gap-8 lg:gap-10">
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "menu" : "";
              }}
              to={"/"}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "menu" : "";
              }}
              to={"/men"}
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "menu" : "";
              }}
              to={"/women"}
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "menu" : "";
              }}
              to={"/kid"}
            >
              Kid
            </NavLink>
          </li>
        </ul>
        </div>
        <div className="flex items-center">
          {loggedUser ? (
            <>
              <span className="p-3 px-6 font-bold rounded-3xl text-pink-400">
                {loggedUser.username}
              </span>
              <button
                onClick={handleLogout}
                className="ml-1 lg:ml-3 py-2 px-4 md:py-3 md:px-6 bg-red-500 text-white rounded-3xl cursor-pointer hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <span className="py-2 px-5 md:py-3 md:px-6 border font-bold rounded-3xl text-pink-400 cursor-pointer">
              <NavLink to={"/loginSignup"}>Login</NavLink>
            </span>
          )}
          <NavLink to={"/cart"}>
            <div className="relative">
              <i className="bi bi-cart-dash-fill text-2xl text-pink-500 ml-4"></i>
              {cart.length > 0 &&
              <span className="text-xs absolute bg-red-400 rounded-full w-4 text-center text-white left-8">
                {cart.length}
              </span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
