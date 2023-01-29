import React from 'react'
import { Box } from '@mui/material'
import { BlogVideoComp } from '../components/shared/BlogVideoComp'
import { width } from '@mui/system'

import {MdOutlineArrowDownward} from "react-icons/md";

export const BlogPage = () => {
  return (
    
    
<div >
  
<Box className='blogWraper'>
<div className='blog1'> <h2> The Stylish
coffee</h2>
<h3>Una tazzina di caffè dura solo un istante, 
    ma è quell’istante che migliora la tua giornata.</h3>
    <span className='rotSpan'>
    
        learn more 
    
    </span>
    <MdOutlineArrowDownward/>
   
 </div> 
<div className='blog2'>  </div>
</Box>



<div className='blog3'> <BlogVideoComp></BlogVideoComp></div>
       
 
    </div>
  )
}


