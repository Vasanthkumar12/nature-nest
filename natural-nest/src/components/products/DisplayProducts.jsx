import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'

export const DisplayProducts = () => {
  const products = useSelector(state => state.products)

  const [filterByName, setFilterByName] = useState('')

  const searchRef = useRef(null)

  let filteredResult = []
  const lowerSearch = filterByName.toLowerCase();
  filteredResult = products
    .filter(product =>
      product.product_name.toLowerCase().includes(lowerSearch)
    )
    .sort((a, b) => {
      const aStarts = a.product_name.toLowerCase().startsWith(lowerSearch) ? -1 : 1;
      const bStarts = b.product_name.toLowerCase().startsWith(lowerSearch) ? -1 : 1;
      return aStarts - bStarts;
    }
  );

  const result = (filteredResult.length > 0) ? filteredResult : products

  return (
    <>
      <h1 className="text-3xl text-center mt-5 mb-10">Fresh Vegetables</h1>

      <div className="flex justify-center mb-10">
        <div className="bg-white flex items-center rounded-full overflow-hidden shadow-md">
          <FaSearch
            onClick={ (e) => searchRef.current.focus() }
            className="mx-3 text-green-600 cursor-pointer"
          />
          <input
            type="search"
            ref={searchRef}
            onChange={(e) => setFilterByName(e.target.value)}
            placeholder="Search Products..."
            className="p-2 pr-4 w-64 text-green-700 outline-none"
          />
        </div>


      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4">
        {result.map((product) => (
          <div
            key={product.id}
            className="bg-white w-full max-w-xs mx-auto relative tracking-wide p-5 flex flex-col justify-evenly overflow-hidden border border-gray-200 rounded-lg shadow-md"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.product_name}
                className="h-48 w-full object-cover shadow-lg ring-2 ring-green-500 shadow-yellow-800/50 transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <h3 className="pt-5 pl-3 font-semibold text-lg text-green-700">{product.product_name}</h3>
            <p className="pt-3 pl-3 text-green-700">{product.quantity}</p>
            <p className="pt-4 pl-3 tracking-tight">
              <span className="text-2xl font-bold text-green-700">&#8377;{product.price}</span>{" "}
              <strike className="text-green-500">&#8377;{product.strikeoutPrice}</strike>
            </p>
            <button className="mt-5 p-2 text-white bg-green-500 border-2 border-green-500 font-bold hover:bg-green-600 rounded-md cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
