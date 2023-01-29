import styled from '@emotion/styled'
import { CardActions, Grid, Typography,Button,Card } from '@mui/material'
import { Box  } from '@mui/system'


import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, rateProduct, removeFromCart, setSelectedProduct, useCartItems, useUserInfo } from '../../redux'
import { isUserAdmin } from '../../application'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Rating } from './Rating'


const StyledCardContent=styled(Box)(()=>({
    display: "flex",
    flexDirection:"column",
    justifyContent:"space-between" ,
   
    
  

}));
const StyledBox=styled(Box)(()=>({
  display: "flex",
  flexDirection:"flex",
  justifyContent:"space-between" ,

 
  


}));
const StyledCardTypography=styled(Typography)(()=>({
  display: "flex",
  flexDirection:"column",
  justifyContent:"space-between" ,

  // backgroundColor:"red",
  // width:"200px",
  // height:"200px",


}));

export const ProductCard = ({name,_id,image,price,category,brand,description,averageRating,}) => {

const cartItems=useCartItems();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userInfo=useUserInfo();
  const isProductInCart=cartItems.find((item)=>item.product._id===_id);
  const onEdit=()=>{
    dispatch(setSelectedProduct({product:{
      name,
      _id,
      image,
      price,
      category,
      brand,
      description,
      
    }}))
    navigate(`/products/edit/${name}`)
  }
const {pathname,search}=useLocation();
const onRatingChange=(e)=>{
console.log('e.target.value', e.target.value);
dispatch(rateProduct({productId:_id,userId:userInfo._id , url:`${category}${search}&size=1`, isHome:pathname==="/", rating:e.target.value,
})
);
};
  return (
   <Grid item >
      <Card  >
        <Link to={`/products/categories/${category}/${name}`} state={{id:_id}}>
        <img src={image} alt={`${category} ${name}`} width="300px" height={"300px"} ></img>
<StyledCardContent>
    <Typography>{price}</Typography>
    <StyledCardTypography>{name}</StyledCardTypography>
</StyledCardContent>
</Link>
<CardActions>
 <Rating value={averageRating} isDisabled={!userInfo} onChange={onRatingChange} />
  <StyledBox>
    {isProductInCart ? (
<>
<Button  onClick={()=>dispatch(addToCart({_id,price,name}))}> + </Button>
<Button  onClick={()=>dispatch(removeFromCart({_id}))}> - </Button>
</>
 ):(
  <Button onClick={()=>dispatch(addToCart({_id,price,name}))}>
    add to cart 
  </Button>
 )}
 {isUserAdmin(userInfo) && <Button onClick={onEdit}> edit </Button>}

  </StyledBox>
</CardActions>
</Card>
    </Grid>
  )
}

