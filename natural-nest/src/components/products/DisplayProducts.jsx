import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import bana from 

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

  const result = (filteredResult.length > 0 || lowerSearch.length > 0) ? filteredResult : products

  return (
    <>
      <h1 className="text-3xl text-lime-600 font-bold text-center mt-5 mb-10">Fresh Vegetables</h1>

      <div className="flex justify-center mb-10">
        <div className="bg-white flex items-center rounded-full overflow-hidden shadow-md">
          <FaSearch
            onClick={ (e) => searchRef.current.focus() }
            className="mx-3 text-lime-600 cursor-pointer"
          />
          <input
            type="search"
            ref={searchRef}
            onChange={(e) => setFilterByName(e.target.value)}
            placeholder="Search Products..."
            className="p-2 pr-4 w-64 text-lime-600 outline-none"
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
              {/* <img src="./src/assets/vegetables/banana.jpg" alt="ima" /> */}

            </div>
            <h3 className="pt-5 pl-3 font-semibold text-2xl text-black">{product.product_name}</h3>
            <p className="pt-1 pl-3 text-[20px] text-green-700">{product.quantity}</p>
            <p className="pt-1 pl-3 tracking-tight">
              <span className="text-2xl font-bold text-lime-600">&#8377;{product.price}</span>{" "}
              <strike className="text-lime-600">&#8377;{product.strikeoutPrice}</strike>
            </p>
            <Link to={`/view-details/${product.id}`}>
                <button className="mt-2 p-2 pt-1 text-lime-600 text-2xl bg-lime-200 border-2 border-lime-200 font-bold hover:bg-lime-500 hover:text-lime-200 rounded-md cursor-pointer">
                Add to Cart
              </button>
            </Link>

          </div>
        ))}
      </div>
    </>
  );
};
