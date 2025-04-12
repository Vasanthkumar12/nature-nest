import { DISPLAY_PRODUCTS, FETCH_ERROR, FETCH_LOADING } from "./actionTypes"

const initialState = {
  products: [],
  loading: true,
  errors: []
} 

export const productReducer = (state = initialState, action) => {
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