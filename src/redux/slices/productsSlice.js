import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { action } from "@remix-run/router";
import { logDOM } from "@testing-library/react";
import { instance } from "../../application";


export const saveProduct=createAsyncThunk("product/saveProduct", 
async({product,isUpdating},{dispatch})=>{
const endpoit=isUpdating?`/products/${product.id}` :"/products";
const method= isUpdating? "put" : "post";
const {data}=await instance[method](endpoit, {product})
dispatch(fetchHomePageProducts());
return data;
});

export const fetchHomePageProducts=createAsyncThunk("product/fetchHomePageProducts",async()=>{

const {data}=await instance.get("/products");
return data;

});
export const fetchCategoryProducts=createAsyncThunk("product/fetchCategoryProducts", async(url)=>{

    const {data}=await instance.get(`/products/categories/${url}`);
    console.log("data", data);
    return data;
    
    });



export const fetchQueryProducts=
createAsyncThunk("product/fetchQueryProducts",async(name)=>{
console.log("shemodis1");
        const {data}=await instance.get(`/products?name=${name}`);
        console.log("data", data);
        return data;
        
        
        });


export const fetchSingleProductsById=
        createAsyncThunk("product/fetchSingleProductsById",async({id,category})=>{
        console.log("shemodis1");
                const {data}=await instance.get(`/products/category/${category}/${id}`);
                console.log("data", data);
                return data;
                
                
                });



export const rateProduct=
                createAsyncThunk("product/rateProduct",async({productId, userId,url,isHome, rating}, {dispatch})=>{
                console.log("shemodis1");
                       await instance.post(`products/${productId}/users/${userId}/rate`, {rating});
                        if(!isHome){
                            dispatch(fetchCategoryProducts(url))
                        }else {
                            dispatch(fetchHomePageProducts());
                        }
                        
                        
                        
                        });

const productSlice=createSlice({
    name:"product",
    initialState:{
        loading:false,
        error:null,
        selectedProduct: null,
        categories:[],
        homePageProducts:[],
        categoryProducts:[],
        searchResults:[],
        singleProduct:null ,
    },
    reducers:{
        setSelectedProduct:(state,action)=>{
            state.selectedProduct=action.payload.product;
        },
        setSearchResults:(state)=>{
            state.searchResults=[];
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(saveProduct.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(saveProduct.fulfilled,(state)=>{
            state.loading=false;
        });
        builder.addCase(saveProduct.rejected,(state)=>{
            state.loading=false;
            state.error="some error";
        });



        builder.addCase(fetchHomePageProducts.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchHomePageProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.homePageProducts=action.payload.products;
            state.categories=action.payload.categories;
        });
        builder.addCase(fetchHomePageProducts.rejected,(state)=>{
            state.loading=false;
            state.error="there are no products,please refresh";
        });


        builder.addCase(fetchCategoryProducts.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchCategoryProducts.fulfilled,(state,action)=>{
            state.loading=false;
            console.log("pay", action.payload);
            state.categoryProducts=action.payload;
            
        });
        builder.addCase(fetchCategoryProducts.rejected,(state)=>{
            state.loading=false;
            state.error="there are no products,please refresh";
        });




        builder.addCase(fetchQueryProducts.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchQueryProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.searchResults=action.payload.products;  
            
        });
        builder.addCase(fetchQueryProducts.rejected,(state)=>{
            state.loading=false;
            state.error="something went wrong ";
        });




        builder.addCase(fetchSingleProductsById.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchSingleProductsById.fulfilled,(state,action)=>{
            state.loading=false;
            state.singleProduct=action.payload.product;  
            
        });
        builder.addCase(fetchSingleProductsById.rejected,(state)=>{
            state.loading=false;
            state.error="products not found ";
        });
    },


});
export const {setSelectedProduct,setSearchResults}=productSlice.actions;
export const productReducer=productSlice.reducer;