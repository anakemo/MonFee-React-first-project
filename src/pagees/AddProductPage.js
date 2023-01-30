import React, { useEffect } from 'react'
import ProductForm from '../components/product/ProductForm'
import { styled,Box } from '@mui/material';
import { ProductFormPage } from './ProductFormPage';
import { generateAddProductFormValues } from '../components/product/ProductForm';
import { useForm } from '../application';


export const AddProductPage = () => {
  const StyledContentContainer=styled(Box)(() => ({
    padding:"100px",
  
    minHeight:"90vh",
    backgroundColor:"#424242",
   
    
   }));
  

const{
    formValues:productFormValues,onInputChange,setFormValues}
    =useForm({defaultFormValues : generateAddProductFormValues(),
}
)

 setFormValues(generateAddProductFormValues()); 



  
  return (
   
        <div>
        <StyledContentContainer>
        <ProductForm >
            
            </ProductForm>
        </StyledContentContainer>
        
        
            </div>

    )
   
  
};
