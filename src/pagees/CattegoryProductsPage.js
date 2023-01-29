import React from 'react'
import { CategoryProductList } from '../components/product/categoryProducts/CategoryProductList'
import { CattegoryProductsPage } from '../components/product/categoryProducts'
import { Sidebar } from '../components/sidebar/Sidebar'
import styled from '@emotion/styled'
import { Box } from '@mui/system'


const StyledContentContainer=styled(Box)(() => ({
  padding:"20px",
  marginLeft:"255px",
 //  marginTop:"70px",
  minHeight:"100vh",
 
  
 }));


export const CategoryProductsPage = () => {
  return (
    <div>
<StyledContentContainer>
<Sidebar></Sidebar>
  
  
  <CattegoryProductsPage/>
</StyledContentContainer>
    

  
    </div>
  )
}

