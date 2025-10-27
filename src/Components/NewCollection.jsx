import React from 'react'
import { newCollection } from './Assets/Product'
import { useCart } from '../Context/CartContext'
const NewCollection = () => {
    const { addCart } = useCart();
  return (
    <div className='py-15'>
    <div className='text-3xl text-pink-500 font-bold text-center  mt-10'>NewCollection</div>
     <div className="flex flex-wrap justify-center py-4 gap-10">
        {newCollection.map((item) => (
          <div key={item.id} className="w-60 p-4 sm:w-70 md:w-80 rounded-lg bg-white shadow cursor-pointer hover:shadow-2xl hover:shadow-gray-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full  object-contain"
            />
            <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
            <p>Rs: {item.price}</p>
            <button onClick={()=>{
              addCart(item)
            }} className="bg-orange-500 text-white px-4 py-2 rounded mt-2 flex cursor-pointer">Add to Cart</button>
          </div>
        ))}
      </div>
     
      </div>
      
  )
}

export default NewCollection