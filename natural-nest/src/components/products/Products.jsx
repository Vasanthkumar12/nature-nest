import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { DisplayProducts } from './DisplayProducts'

const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS'

const initialState = {
  products: []
}

const productReducer = (state, action) => {
  switch(action.type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: [...action.payload] }

    default: 
      return state
  }
}

export const Products = () => {
    const [productsList, dispatch] = useReducer(productReducer, initialState)
    console.log(productsList)

    async function fetchProducts() {
      let res = await axios.get("https://natural-nest-723f4-default-rtdb.firebaseio.com/products.json")
      console.log(res.data)
      dispatch({ type: DISPLAY_PRODUCTS, payload: res.data })
    }

    useEffect(() => {
      fetchProducts()
    }, [])

    return (
      <div className="bg-lime-600 p-3 pl-5 pr-5 text-white font-sans">
            <DisplayProducts 
              products = {productsList.products}
            />
      </div>
  )
}
