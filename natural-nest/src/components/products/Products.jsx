import React, { useEffect } from 'react';
import { DisplayProducts } from './DisplayProducts';
import { fetchAllItems } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export const Products = () => {
  const dispatch = useDispatch();

  const errorsList = useSelector(state => state.errors);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  return (
    <>
      {errorsList.length > 0 ? (
        <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl text-center pt-40 bg-lime-400 min-h-screen text-white px-4">
          {errorsList}
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl text-center pt-40 bg-lime-400 min-h-screen text-white px-4">
          Fetching Products...
        </div>
      ) : (
        <div className="bg-lime-200 px-3 py-5 sm:px-5 md:px-10 font-sans">
          <DisplayProducts />
        </div>
      )}
    </>
  );
};
