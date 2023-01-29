import { Grid } from '@mui/material';
import React from 'react'
import { useQueryParam } from '../../../application';
import { useCategoryProducts,fetchCategoryProducts } from '../../../redux'
import { GridComponent } from '../../shared/GridComponent';
import { ProductCard } from '../ProductCard';



export const CategoryProductList = () => {
  
 
  const CategoryProducts=useCategoryProducts();
 

  return (
    <GridComponent>
     {CategoryProducts.products?.map((product)=>{
return (
  <Grid item key={product._id}>
<ProductCard {...product}/>
  </Grid>
)
     })}
    </GridComponent>
  )
}

