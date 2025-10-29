import React, { useState } from "react";
import logo from "/public/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { loggedUser, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/LoginSignup");
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 sm:w-14" />
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-400">
            ShopeEase
          </h2>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {["/", "/men", "/women", "/kid"].map((path, i) => {
            const labels = ["Shop", "Men", "Women", "Kid"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-pink-500 font-semibold"
                      : "hover:text-pink-400"
                  }
                >
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right: Login / Cart / Hamburger */}
        <div className="flex items-center gap-3 sm:gap-5">
          {loggedUser ? (
            <>
              <span className="hidden sm:block font-semibold text-pink-400">
                {loggedUser.username}
              </span>
              <button
                onClick={handleLogout}
                className="hidden md:block bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/loginSignup"
              className="hidden md:block border px-5 py-2 rounded-full text-pink-400 font-semibold hover:bg-pink-50 transition"
            >
              Login
            </NavLink>
          )}

          <NavLink to="/cart" className="relative">
            <i className="bi bi-cart-dash-fill text-2xl text-pink-500"></i>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>

          {/* Hamburger (mobile only) */}
          <button
            className="text-pink-500 text-3xl md:hidden focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* Overlay (background blur when menu open) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-pink-400">Menu</h3>
          <button
            className="text-gray-600 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col mt-4 text-gray-700 font-medium">
          {["/", "/men", "/women", "/kid"].map((path, i) => {
            const labels = ["Shop", "Men", "Women", "Kid"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-3 hover:bg-pink-50 ${
                      isActive ? "text-pink-500 font-semibold" : ""
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col items-center gap-3">
          {loggedUser ? (
            <>
              <span className="text-pink-400 font-semibold">
                {loggedUser.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white cursor-pointer px-6 py-2 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/loginSignup"
              onClick={() => setMenuOpen(false)}
              className="border cursor-pointer px-6 py-2 rounded-full text-pink-400 font-semibold hover:bg-pink-50 transition"
            >
              Login
            </NavLink>
          )}

          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative flex items-center gap-2 mt-2"
          >
            <i className="bi bi-cart-dash-fill text-2xl text-pink-500"></i>
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="absolute left-6 -top-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
