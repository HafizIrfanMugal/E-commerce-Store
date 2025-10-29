import React from "react";
import Bottom from "../Components/Bottom";
import NewCollection from "../Components/NewCollection";
import NewLetter from "../Components/NewLetter";
const Shop = () => {
  const handleScrollClick = ()=>{
        const newCollect = document.getElementById("projects")
        newCollect.scrollIntoView({behavior:"smooth"})
  }
  
  return (
    <>
    <div className="py-22 md:px-24">
      <div className="flex justify-around items-center m-5 h-130 bg-gradient-to-b from-pink-200 via-pink-100 to-gray-200">
        <div className="sm:p-2">
          <span>NEW ARRIVALS</span>
          <p className="text-6xl w-70">new Collections for everyone</p>
          <button onClick={handleScrollClick} className="bg-red-500 p-2 cursor-pointer mt-5 text-white text-sm px-4 rounded-3xl">
            Latest Collection <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <img
          className="hidden sm:block lg:h-130 md:h-100 sm:h-90 mix-blend-darken"
          src="/Assets/Men/Suit/Suite-12-.webp"
          alt=""
        />
      </div>
      </div>
      <section id="projects">
        <NewCollection/>
      </section>
      <NewLetter />
      <Bottom/>
    </>
  );
};

export default Shop;
