import {Box, AppBar, styled,Toolbar , Button, Badge } from "@mui/material";
import React from 'react'
import {Link} from "react-router-dom";
import { LoginPage } from "../../pagees/LoginPage";
import { LoginForm } from "../login";
import { SearchBar } from "./SearchBar";
import { UserIcon } from "./UserIcon";
import {FiShoppingCart} from "react-icons/fi";
import { height, width } from "@mui/system";
import { useCartItems } from "../../redux";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { Logo } from "./Logo";
// import {DiCoffeescript} from "react-icons/di"
// import { brown } from '@mui/material/colors';

const StyledAppBar=styled(AppBar)(()=>({
background:"rgba(90, 51, 0, 0.2)",
color:"#efebe9",
fontWeight:"800",
width:"calc(100%-255px)",
padding:" 0 100px 0 30px",
height:"80px",
boxShadow:"box-shadow: 10px 5px 5px",
display:"flex",

    
}));
const StyledToolbar=styled(Toolbar)(()=>({
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
}));

const StyledBadge=styled(Badge)(()=>({
  "& .MuiBadge-badge":{
    width:"20px",
    height:"21px",
    color:"#fff",
    background:"#795548",
    top:"2px",
    right:"-3px",
  },
}))

export const Header = () => {
  const navigation = [ "PRODUCTS", "BLOG",  "CONTACT", ];
  const cartItems=useCartItems();
  const cartItemsQuantity=cartItems.reduce((acc,curr)=>acc+curr.quantity,0);
  const [isCartOpen,setIsCartOpen]=useState(false);
 
  return (
   <Box>
   
   <StyledAppBar className="appbar">
    <StyledToolbar>
     
       {/* <Logo/> */}
    <ul className="navigation"> {navigation.map((item)=><Link to={`/${item.toLowerCase()}/`} className="navigText" >{item}</Link>)}</ul>
    <Logo/>
    <SearchBar></SearchBar>
    <Button onClick={()=>setIsCartOpen(true)}> 
        <StyledBadge badgeContent={cartItemsQuantity}>
          <FiShoppingCart size={35} color="#efebe9"></FiShoppingCart>
           </StyledBadge>
      </Button>
    <UserIcon>
      {/* <Button> 
        <Badge badgeContent={10}>
          <FiShoppingCart size={35}></FiShoppingCart>
           </Badge>
      </Button> */}
    </UserIcon>
    <CartDrawer isOpen={isCartOpen} onClose={()=>{ 
      setIsCartOpen(false);
      }}></CartDrawer>
    </StyledToolbar>
    
   
   </StyledAppBar>
    
   
    
    
        
   
   </Box>
  )
}

