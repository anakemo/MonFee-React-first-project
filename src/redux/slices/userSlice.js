import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../application";
import { useForm } from "../../application/hooks/useForms";
import { RegisterForm } from "../../components/register";







export const authenticateUser=createAsyncThunk("user/authenticateUser",async(values)=>{

    try{
        const route=`/users/${values.isLogin ? "login" : "register"}`;
        const {data}= await instance.post(route ,values.formValues);
        console.log("data",data);
        
        localStorage.setItem("token",data.token);
        localStorage.setItem("refresh_token",data.refreshToken);
        return data;

    } catch(error){
        console.log(error);
    }
});



const userSlice=createSlice({
    name:"user",
    initialState:{
        loading: false,
        userData:null,
        error:null,
        messages:"",
    },
    reducers:{
        logOutUser:(state)=>{
            state.userData=null;
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(authenticateUser.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(authenticateUser.fulfilled,(state,action,user)=>{
            state.loading=false;
           
            state.userData=action.payload.user;
        });
        builder.addCase(authenticateUser.rejected,(state)=>{
            state.loading=false;
            state.error="some error";
        })
    }
});
export const {logOutUser}=userSlice.actions;
export const userReducer=userSlice.reducer;
