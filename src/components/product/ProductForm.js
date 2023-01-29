import React, { useEffect, useState } from 'react'
import { useForm } from '../../application'
import { TextFieldComponent } from '../shared'
import { FormControl,Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { saveProduct, useSelectedProduct } from '../../redux'
import FileBase from "react-file-base64"
import { useNavigate } from 'react-router-dom'
import { SaveButton } from '../shared/SaveButton'









 const generateAddProductFormValues=(selectedProduct)=>{
   
    return{
        name:{
            value: selectedProduct?.name || "",
            required:true,
            error:"",
            validateInput:(name)=>name.length>1 ? null : "name sould have at least 2 character",
        },
        description:{
            value: selectedProduct?.description || "",
            required:true,
            error:"",
            validateInput:(description)=>description.length>1 ? null : "description sould have at least 2 character",
        },
        category:{
            value: selectedProduct?.category || "",
            required:true,
            error:"",
            validateInput:(category)=>category.length>1 ? null : "category sould have at least 2 character",
        },  
        brand:{
            value: selectedProduct?.brand || "",
            required:true,
            error:"",
            validateInput:(brand)=>brand.length>1 ? null : "brand sould have at least 2 character",
        },  
        price:{
            value: selectedProduct?.price || 0,
            required:true,
            error:"",
            validateInput:(price)=>price>0 ? null : "price sould  be positive number ",
        },          
                 
           }              
              
        }




















 const ProductForm = () => {
    const{formValues:productFormValues,onInputChange,setFormValues}=useForm({defaultFormValues : generateAddProductFormValues(),}
    )
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const selectedProduct=useSelectedProduct();
    const [image,SetImage]=useState("");
    const onSaveProduct=()=>{
        const name=productFormValues.name.value;
        const description=productFormValues.description.value;
        const brand=productFormValues.brand.value;
        const category=productFormValues.category.value;
        const price=productFormValues.price.value;
        dispatch(saveProduct({product:{
            name,
            description,
            category,
            brand,
            price,
            image,
            id:selectedProduct?._id,
            
        },
        isUpdating: !!selectedProduct

    })
    )
    .unwrap()
    .then(()=>{navigate("/")})
};

useEffect(()=>{
    if(selectedProduct){
        setFormValues(generateAddProductFormValues(selectedProduct));
        SetImage(selectedProduct.image);
    }
},[selectedProduct]);



  return <FormControl fullWidth  className='prdadd'>
<TextFieldComponent 
name="name" 
value={productFormValues.name.value} 
onChange={onInputChange} 
error={productFormValues.name.error} 
helperText={productFormValues.name.error} 
label="name"
 />
 <TextFieldComponent 
name="description" 
value={productFormValues.description.value} 
onChange={onInputChange} 
error={productFormValues.description.error} 
helperText={productFormValues.description.error} 
label="description"
 />
 <TextFieldComponent 
name="category" 
value={productFormValues.category.value} 
onChange={onInputChange} 
error={productFormValues.category.error} 
helperText={productFormValues.category.error} 
label="category"
 />
 <TextFieldComponent 
name="brand" 
value={productFormValues.brand.value} 
onChange={onInputChange} 
error={productFormValues.brand.error} 
helperText={productFormValues.brand.error} 
label="brand"
 />
 <TextFieldComponent 
name="price" 
value={productFormValues.price.value} 
onChange={onInputChange} 
error={productFormValues.price.error} 
helperText={productFormValues.price.error} 
label="price"
 />
 <FileBase
  type="file"
  multiple={false}
  onDone={({base64})=>{
SetImage(base64)
  }}></FileBase>
  
 <SaveButton onClick={onSaveProduct}>
    save product
 </SaveButton>
</FormControl>
}
export default ProductForm;


