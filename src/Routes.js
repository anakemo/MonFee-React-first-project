import React from 'react'
import {Routes,Route,Link } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage ,ProductFormPage, CategoryProductsPage, SingleProductPage} from './pagees';
import { isUserAdmin, ProtectedRoute } from './application';
import { useUserInfo } from './redux';
import { useCategories } from './redux';
import { CategoryProductList } from './components/product/categoryProducts/CategoryProductList';
import { HomePageProducts } from './components/product';
import { Sidebar } from './components/sidebar/Sidebar';
import { ProductPage } from './pagees/ProductPage';
import { BlogPage } from './pagees/BlogPage';
import { FooterPage } from './pagees/FooterPage';
import { useNavigate } from 'react-router-dom';





export const RoutesComponent = () => {
  const navigate=useNavigate();

  const userInfo=useUserInfo();
  

  
  return (
  
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/products/new" element={<ProtectedRoute hasAccess={isUserAdmin(userInfo)}>
            <ProductFormPage/>
          </ProtectedRoute>}>

          </Route>


       <Route
      path="/products/edit/:name" 
       element={
       <ProtectedRoute hasAccess={isUserAdmin(userInfo)}>
             <ProductFormPage/>
             </ProtectedRoute>
        }
        />
<Route path='/products'
         element={<ProductPage></ProductPage> } 
  
         />
         
         <Route path='/products/categories/:categoryName'
         element={<CategoryProductsPage/>}/>

         <Route path="/products/categories/:categoryName/:name" element={<SingleProductPage/>}>

         </Route>
         <Route path="/blog/" element={<BlogPage/>}/>


         <Route path="/contact/"  element={<FooterPage/>}/>

         
 
</Routes>

  
  );
  
};


