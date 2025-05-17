import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const ViewProductDetails = () => {
  let { id } = useParams()
  let products = useSelector(store => store.products)
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const found = products.find(p => p.id == id)
    if (found) {
      setProduct(found)
    } else {
      axios
        .get(`https://natural-nest-723f4-default-rtdb.firebaseio.com/products/${id - 1}.json`)
        .then(res => {
          if (res.data) {
            setProduct(res.data)
          } else {
            console.log('No product data found.')
          }
        })
        .catch(error => console.log('Error fetching product: ', error))
    }
  }, [id, products])

  const handleDecrement = () => {
    setQuantity(prev => prev - 1)
  }
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  if (!product) {
    return (
      <div className='min-h-screen bg-lime-200 flex justify-center items-center text-3xl md:text-5xl text-red-600'>
        Product not found.
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-lime-200 flex flex-col md:flex-row justify-center items-center md:items-center gap-6 p-4 md:p-10'>
      
      {/* Product Card */}
      <div className="bg-white w-full max-w-md p-5 flex flex-col justify-evenly border border-gray-200 rounded-lg shadow-md">
        <div className="overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.product_name}
            className="h-52 w-full object-cover shadow-lg ring-2 ring-green-500 shadow-yellow-800/50 transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <h3 className="pt-5 font-semibold text-2xl text-black">{product.product_name}</h3>
        <p className="pt-1 text-lg text-green-700">{product.quantity}</p>
        <p className="pt-1 tracking-tight">
          <span className="text-2xl font-bold text-lime-600">&#8377;{product.price}</span>{" "}
          <strike className="text-lime-600">&#8377;{product.strikeoutPrice}</strike>
        </p>
        <button className="mt-4 p-2 text-lg bg-lime-200 border-2 border-lime-200 font-bold text-lime-600 hover:bg-lime-500 hover:text-white rounded-md cursor-pointer">
          Add to Cart
        </button>
      </div>

      {/* Description Box */}
      <div className="bg-white w-full max-w-2xl p-6 border border-gray-200      rounded-xl shadow-md text-gray-800 text-base leading-relaxed">
            {/* Product Description */}
            <p className="text-sm md:text-base">{product.description}</p>

            {/* No GST Tag */}
            <div className="mt-4">
              <p className="inline-block text-center text-sm font-semibold bg-lime-600 text-white px-4 py-1 rounded-full shadow-md">
                *** No GST ***
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Quantity */}
              <div className="flex items-center gap-3">
                <p className="font-semibold">Quantity:</p>

                <button
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className={`w-8 h-8 flex items-center justify-center text-xl font-bold border-2 rounded-md transition duration-200 pb-1
                    ${quantity <= 1
                      ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                      : 'border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white'}
                  `}
                >
                  -
                </button>
                    
                <span className="text-xl font-semibold min-w-[48px] text-center">{quantity} kg</span>
                    
                <button
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center text-xl font-bold text-lime-600 border-2 border-lime-600 rounded-md hover:bg-lime-600 hover:text-white transition duration-200 pb-1"
                >
                  +
                </button>
              </div>
                    
              {/* Total Price */}
              <div className="text-lg sm:text-xl font-semibold text-lime-600">
                Total: ₹ <span className="sm:text-[32px]">{quantity * product.price}</span>/-
              </div>
            </div>
        </div>
    </div>
  )
}
