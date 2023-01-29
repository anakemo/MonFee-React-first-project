import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { fetchSingleProductsById, useSingleProduct } from '../../../redux';

export const DetailedProduct = () => {
    const {state}=useLocation();
    const dispatch=useDispatch();
    const {categoryName}=useParams();
    const singleProduct=useSingleProduct();
    useEffect(()=>{
        dispatch(fetchSingleProductsById({id:state.id , category:categoryName}));
    },[state.id]);
  return (
    <div>
      DetailedProductsPage
    </div>
  )
};


