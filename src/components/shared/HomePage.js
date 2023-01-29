import React, { useState } from 'react'
import { Box, Button } from '@mui/material';
import { instance, isUserAdmin } from '../application';
import { useEffect } from 'react';
import { setSelectedProduct, useUserInfo } from '../redux';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { HomePageProducts } from '../components/product';
import { SliderComp } from '../application/Carousel';





export const HomePage = () => {


  return <div className='homePage'>



<SliderComp   sx={{ padding:"20px",
 marginLeft:"255px",}}/>





  </div>;

  
  
};






