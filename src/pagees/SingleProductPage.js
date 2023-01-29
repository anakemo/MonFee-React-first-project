import React from 'react'

import { addToCart, rateProduct, removeFromCart, setSelectedProduct, useCartItems, useUserInfo } from '../redux'
import { CardActions, Grid,Card, Button ,Box} from '@mui/material'

import { Link, useLocation, useNavigate } from 'react-router-dom'



import { Rating } from '../components/product/Rating'

import { useEffect } from 'react';



import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchSingleProductsById, useSingleProduct} from '../redux';




export const SingleProductPage = () => {

  const cartItems=useCartItems();

  const navigate=useNavigate();

 




    const {state}=useLocation();
    const dispatch=useDispatch();
   
    const {categoryName}=useParams();
    const singleProduct=useSingleProduct();
    useEffect(()=>{
        dispatch(fetchSingleProductsById({id:state.id , category:categoryName}));
    },[state.id]);
   

return(

 <div className='singlproductpg'>
 

 <h1>{singleProduct.name}</h1>
  <img src={singleProduct.image} alt={`${singleProduct} ${singleProduct.name}`} 
 width="700px" height={"700px"} ></img>
 <h2>{singleProduct.description}</h2>
 <h3>{singleProduct.price} GEL</h3>









 


 </div>
)

}







    

    
    

    
  



