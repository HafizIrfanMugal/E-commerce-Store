import React, { useState } from "react";
import { useEffect } from "react";
const NewLetter = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("subscribe") || "[]");
  }, []);
  const handleSubscribe = () => {
    if (!email) {
      setMessage("❗ Please enter your email before subscribing.");
      return;
    }
    const oldSub = JSON.parse(localStorage.getItem("subscribe") || "[]");
    if (oldSub.includes(email)) {
      setMessage("⚠️ You are already subscribed!");
      return;
    }
    const updateSub = [...oldSub, email];
    localStorage.setItem("subscribe", JSON.stringify(updateSub));
    setMessage("✅ Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setMessage(""), 3000)
  };

  return (
    <div className="h-80 p-2 bg-gradient-to-b from-pink-100 via-pink-100 mt-10 mx-10 pt-16 text-center">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-medium">Get New Offers On Your Email</h1>
      <p className="mt-10">Subscribe to our new</p>
      <div className="">
      <div className=" flex flex-col gap-4 sm:relative sm:w-65 md:w-85 m-auto ">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 m-auto w-50 sm:w-65 md:w-85 border-gray-300 border-1 outline-0 px-7 rounded-3xl mt-10"
        type="text"
        placeholder="Your Email id"
      />
      <button
        onClick={handleSubscribe}
        className="h-10 m-auto cursor-pointer sm:absolute sm:top-10 sm:left-60 md:left-78  w-30 bg-black text-white rounded-3xl"
      >
        Subscribe
      </button>
      </div>
      </div>
      {message && (
        <p className="mt-4 text-gray-700 font-medium">{message}</p>
      )}
    </div>
  );
};

export default NewLetter;
