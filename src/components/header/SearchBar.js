

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Box,Autocomplete,TextField} from '@mui/material';
import { Typography } from '../shared';
import { useEffect } from 'react';
import { fetchQueryProducts } from '../../redux';

import { useSearchResults } from '../../redux'


import { useDispatch } from 'react-redux';
import { setSearchResults } from '../../redux';



export const SearchBar = () => {
const [searchValue,setSearchValue]=useState("");
const searchResults=useSearchResults();
console.log("search results", searchResults);
const dispatch=useDispatch();
useEffect(()=>{
const timerId=setTimeout(() => {
  if(searchValue){
    dispatch(fetchQueryProducts(searchValue));

  }else{
    dispatch(setSearchResults());
  }
}, 1000);
return ()=>{
clearTimeout(timerId);
};

},[searchValue]);



console.log("value", searchResults);
  return (
   <Autocomplete
   freesolo
   sx={{width: 300, color:"#efebe9" , backgroundColor:"white", borderRadius:"25px", marginTop:"5px"}} 
  
   disableClearable 

  
   options={searchResults}

  
  

   getOptionLabel={(option)=>option.name} 
    renderOption={(_,option)=>{
      const {name,category,_id,price}=option;
     console.log("option", option);
     return (
      <Link  to={`/products/categories/${category}/${name}`} key={_id} state={{id:_id}}>
    
        <Box sx={{display:"flex"}}>
 <Typography>{name}</Typography>
 <Typography>{price}</Typography>
 
       </Box>
       </Link>
    
      
     )
     
     
   }}
   renderInput={(params)=>{
     return (
      <TextField 
      {...params}
      value={searchValue} 
      onChange={(e)=>setSearchValue(e.target.value)}
      label="search products"
   
      InputProps={{
       ...params.InputProps,
       type:'search' ,
      }}
      
      
      
      />
     )

     
   }}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   />

  )
}


