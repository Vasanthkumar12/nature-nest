import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { DisplayProducts } from './DisplayProducts'

const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS'
const FETCH_LOADING = 'FETCH_LOADING'
const FETCH_ERROR = 'FETCH_ERROR'

const initialState = {
  products: [],
  loading: true,
  errors: []
}

const productReducer = (state, action) => {
  switch(action.type) {
    case FETCH_LOADING:
      return { 
        ...state, 
        loading: action.payload
      }

    case DISPLAY_PRODUCTS:
      return { 
        ...state, 
        products: [...action.payload],
        loading: false
      }

    case FETCH_ERROR:
      return { 
        ...state, 
        loading: action.loading, 
        errors: action.payload, 
        loading: false 
      }

    default: 
      return state
  }
}

export const Products = () => {
    const [productsList, dispatch] = useReducer(productReducer, initialState)
    console.log(productsList)

    async function fetchProducts() {
      dispatch({ type: FETCH_LOADING, payload: true })
      try {
        let res = await axios.get("https://natural-nest-723f4-default-rtdb.firebaseio.com/products.json")
        // console.log(res.data, 'data....')
        if(res.data) {
          dispatch({ type: DISPLAY_PRODUCTS, payload: res.data })
        }
        else {
          // console.log("error")
          dispatch({ type: FETCH_ERROR, payload: ["Network Error..."] })
        }
      }
      catch(error) {
        dispatch({ type: FETCH_ERROR, payload: error.message })
      }
    }

    useEffect(() => {
      fetchProducts()
    }, [])

    return (
      <>
        { productsList.errors.length > 0 ? (
          <div className='flex justify-center items:center text-4xl pt-40 bg-lime-600 h-110 text-white'>
            { productsList.errors }
          </div>) : (
          productsList.loading ? (
            <div className='flex justify-center items:center text-4xl pt-40 bg-lime-600 h-110 text-white'>Fetching Products...</div>
          ) : (
            <div className="bg-lime-600 p-3 pl-5 pr-5 text-white font-sans">
                <DisplayProducts 
                  products = {productsList.products}
                />
            </div>
            )
          )
        }
      </>
  )
}
