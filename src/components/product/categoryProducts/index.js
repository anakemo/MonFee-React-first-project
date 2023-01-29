import { Box } from '@mui/material';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchCategoryProducts, useCategoryProducts } from '../../../redux';
import { CategoryProductList } from './CategoryProductList';
import { Paginate } from './Paginate';
import { useQueryParam } from '../../../application';
import { Sort } from './Sort';

export const CattegoryProductsPage = () => {
    const dispatch=useDispatch();
    const {categoryName}=useParams();
    const {value:page, changeQueryValue:changePage}=useQueryParam("page");
    const {value:sort, changeQueryValue:changeSort}=useQueryParam("sort");
    const categoryProducts=useCategoryProducts();

    useEffect(()=>{
        dispatch(fetchCategoryProducts(`${categoryName}?page=${page}&size=2&sort=${sort}`));
    },[categoryName,page,sort]);
  return (
    <Box className='sortPage'>
      <Sort sort={sort} changePage={changePage}
      changeSort={changeSort}
      />
     <CategoryProductList></CategoryProductList>
     <Paginate 
     currentPage={page} 
     totalPages={categoryProducts.totalPages} 
     changePage={changePage}
     queryKey="page"
     
     />
    </Box>
  )
}


