import { FETCH_LOADING, FETCH_ERROR, DISPLAY_PRODUCTS } from "./actionTypes"
import axios from 'axios'

export const loading = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_LOADING
        })
    }
}

export const errors = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_ERROR,
            payload: ["Network Error..."]
        })
    }
}

export const fetchAllProducts = (data) => {
    return (dispatch) => {
        dispatch({
            type: DISPLAY_PRODUCTS,
            payload: data
        })
    }
}

export const fetchAllItems = () => {
    return async (dispatch) => {
        dispatch(loading())
        try {
          let res = await axios.get("https://natural-nest-723f4-default-rtdb.firebaseio.com/products.json")
          console.log(res.data, 'data....')
          if(res.data) {
            dispatch(fetchAllProducts(res.data))
          }
          else {
            // console.log("error")
            dispatch(errors(["Network Error..."]))
          }
        }
        catch(error) {
          dispatch(errors(error.message))
        }
    }
}


