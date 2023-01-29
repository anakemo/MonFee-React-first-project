import { Drawer ,Button} from '@mui/material'
import { Box ,display,styled} from '@mui/system';
import React from 'react'
import { useDispatch } from 'react-redux';
import { clearCart, saveCart, useCartItems, useUserInfo } from '../../redux';
import { Typography } from '../shared';

const StyledBox=styled(Box)(()=>({
padding:20,
width:250,
height:1500,
backgroundColor:"rgba(138, 97, 51,0.5)",
display:"flex",
justifyContent:"space-between",
}));


export const CartDrawer = ({isOpen,onClose}) => {
    const cartItems=useCartItems();
    const userInfo=useUserInfo();
    const dispatch=useDispatch();

  return (
    
  <Drawer open={isOpen} onClose={onClose} anchor="right">
{cartItems.map((item)=>{
    const {product,quantity}=item;
    const {price,name,_id}=product;

    return(
        
         <StyledBox key={_id}> 
        
<Typography> product: {name}</Typography>
<Typography> products amount:  {quantity}</Typography>
<Typography> total cost  {price * quantity}</Typography>

         </StyledBox> 
       
    );
})}

<Button onClick={()=>{
    dispatch(clearCart())
    dispatch(saveCart({userId:userInfo._id,cartItems:[]}))
}}> clear cart </Button>
{userInfo && <Button onClick={()=>{
dispatch(saveCart({userId:userInfo._id, cartItems}))
}}> save cart </Button>}
  </Drawer>
  
  );
};


