import React from 'react'

export const DisplayProducts = ({ products }) => {
  return (
    <>
      <h1 className="text-3xl text-center mt-5 mb-10">Fresh Vegetables</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-xs mx-auto relative tracking-wide p-5 flex flex-col justify-evenly overflow-hidden border border-gray-200 rounded-lg shadow-md"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.product_name}
                className="h-48 w-full object-cover shadow-lg ring-2 ring-green-500 shadow-yellow-800/50 transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <h3 className="pt-5 font-semibold text-lg text-center">{product.product_name}</h3>
            <p className="pt-3 text-center">{product.quantity}</p>
            <p className="pt-4 text-center tracking-tight">
              <span className="text-2xl font-bold text-white">&#8377;{product.price}</span>{" "}
              <strike className="text-gray-200">&#8377;{product.strikeoutPrice}</strike>
            </p>
            <button className="mt-5 p-2 text-white bg-green-500 border-2 border-green-500 font-bold hover:bg-green-600 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
