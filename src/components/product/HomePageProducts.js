import { Grid , Box} from '@mui/material';
import React from 'react'
import { useHomePageProducts } from '../../redux'
import { ProductCard } from './ProductCard';
import { GridComponent } from '../shared/GridComponent';

export const HomePageProducts = () => {
const homePageProducts=useHomePageProducts();
  return (
  
<GridComponent>
      {homePageProducts.map((product)=>  {
       return <ProductCard key={product._id} {...product} > </ProductCard>;
      })}
   </GridComponent>
  
  )
}

