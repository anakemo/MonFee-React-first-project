import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";
import { useSelector } from "react-redux";


import {productReducer } from "./slices/productsSlice"
import { cartReducer } from "./slices/cartSlice";





const persistConfig={
    key:"root",
    storage:storage,
    whitelist:["user"],
};

const rootReducer=combineReducers(
    {
        user:userReducer,
        product:productReducer,
        cart:cartReducer,
    }
);

const persistedReducer=persistReducer(persistConfig,rootReducer);

export const store=configureStore({
        reducer:persistedReducer,
        middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
            }
        ),
    });

export const persistor=persistStore(store);


    export {authenticateUser,logOutUser} from "./slices/userSlice.js";


    
    export {saveProduct,
        
        fetchHomePageProducts,
        fetchCategoryProducts,
        fetchSingleProductsById,
        fetchQueryProducts,
        setSelectedProduct,
        setSearchResults,
        rateProduct,
        } from "./slices/productsSlice.js";

// cart action creators
export  {

    addToCart,
    removeFromCart,
    clearCart,
    fetchCart,
    saveCart
} from "./slices/cartSlice.js"
// userhooks
    export const useUserInfo=()=> useSelector((state)=>state.user.userData);
// producthooks
    export const useSelectedProduct=()=>
        useSelector((state)=>state.product.selectedProduct);

    export const useHomePageProducts=()=>
        useSelector((state)=>state.product.homePageProducts);
    export const useCategories=()=>
        useSelector((state)=>state.product.categories);
        
    export const useCategoryProducts=()=>
        useSelector((state)=>state.product.categoryProducts);

    export const useSearchResults=()=>
    useSelector((state)=>state.product.searchResults);

    export const useSingleProduct=()=>
    useSelector((state)=>state.product.singleProduct);
    
    // carthooks

     export const useCartItems=()=>useSelector((state)=>state.cart.cartItems);

