import React, { useEffect } from 'react'
import ProductForm from '../components/product/ProductForm'
import { styled,Box } from '@mui/material';


export const ProductFormPage = () => {
  const StyledContentContainer=styled(Box)(() => ({
    padding:"100px",
  
    minHeight:"90vh",
    backgroundColor:"#424242",
   
    
   }));
  
  return (
    <div >
<StyledContentContainer>
<ProductForm >
    
    </ProductForm>
</StyledContentContainer>


    </div>
  )
};


