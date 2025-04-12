import React, { useEffect } from 'react'
import { DisplayProducts } from './DisplayProducts'
import { fetchAllItems } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export const Products = () => {
    const dispatch = useDispatch()

    const productsList = useSelector(state => state.products)
    const errorsList = useSelector(state => state.errors)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
      dispatch(fetchAllItems())
    }, [])

    return (
      <>
        { errorsList.length > 0 ? (
          <div className='flex justify-center items:center text-4xl pt-40 bg-lime-600 h-110 text-white'>
            { errorsList }
          </div>) : (
          loading ? (
            <div className='flex justify-center items:center text-4xl pt-40 bg-lime-600 h-110 text-white'>Fetching Products...</div>
          ) : (
            <div className="bg-lime-600 p-3 pl-5 pr-5 text-white font-sans">
                <DisplayProducts 
                  products = {productsList}
                />
            </div>
            )
          )
        }
      </>
  )
}
