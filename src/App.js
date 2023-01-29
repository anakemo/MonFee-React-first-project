import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { instance } from "./application";
import { Header } from "./components/header";
import {RoutesComponent  } from "./Routes";
import './App.css';
// import { CarouselItem,Carousel } from "./application/Carousel.js";
// import { Unstable_Grid2 } from "@mui/material";
import { SliderComp } from "./application/Carousel";
import { HomePage, RegisterPage } from "./pagees";
import { useDispatch } from "react-redux";
import { fetchCart, fetchHomePageProducts, useUserInfo } from "./redux";
import { Sidebar } from "./components/sidebar/Sidebar";
import { BlogPage } from "./pagees/BlogPage";
import { ProductPage } from "./pagees/ProductPage";
import { RegisterForm } from "./components/register";
import { HomePageProducts } from "./components/product";
import { LoginForm } from "./components/login";
// import { FooterPage } from "./pagees/FooterPage";
// import 'bootstrap/dist/css/bootstrap.min.css';





const StyledContentContainer=styled(Box)(() => ({
//  padding:"20px",
//  marginLeft:"255px",
//  marginTop:"70px",
 minHeight:"100vh",

 
}));

const App = () => {

const dispatch=useDispatch();
const userInfo=useUserInfo();
useEffect(()=>{
  dispatch(fetchHomePageProducts());
 if(userInfo){
  dispatch(fetchCart(userInfo._id))
 }
},[]);
  return (
    <div className="App">
<Box >



<Header/>

<StyledContentContainer>



<RoutesComponent/>
</StyledContentContainer>

<BlogPage/>

<div className="hmproducts">
 
<HomePageProducts/>

</div>



</Box>
</div>
    
  );
};




export default App;
