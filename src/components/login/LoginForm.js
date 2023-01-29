import { FormControl } from '@mui/material';
import { useForm } from '../../application';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextFieldComponent } from '../shared';
import { authenticateUser } from '../../redux/slices/userSlice';
import { RegisterForm } from "../../components/register";



export const generateLoginFormValues=()=>{
   
    return{
        
         email:{
            value:"",
            required:true,
            error:"",
            validateInput:(email)=>email.includes("@gmail.com") ? null : "email is not valid",
        },  
        password:{
            value:"",
            required:true,
            error:"",
            validateInput:(password)=>password.length>6 ? null : "password should have at least 6 characters",
        },              
                 
           }             
              
        }
       
        




    





export const LoginForm = () => {

const {formValues:loginFormValues,onInputChange}= useForm({
        defaultFormValues:generateLoginFormValues(),
});
const dispatch=useDispatch();
const navigate=useNavigate();


const onLogin=(e)=>{
    e.preventDefault();
    const email=loginFormValues.email.value;
    const password=loginFormValues.password.value;
    dispatch(authenticateUser(
        {formValues:{email,password},
        isLogin:true})
        )
    .unwrap()
    .then(()=>navigate("/"))
    
    ;
     

};


  return (
    <FormControl fullWidth className='form' >
    
        <TextFieldComponent
        name="email"
        label="email"
        value={loginFormValues.email.value}
        onChange={onInputChange}
        error={!!loginFormValues.email.error}
        helperText={loginFormValues.email.error}
        
        />
        <TextFieldComponent
        name="password"
        label="password"
        value={loginFormValues.password.value}
        onChange={onInputChange}
        error={!!loginFormValues.password.error}
        helperText={loginFormValues.password.error}
        
        />
        <button onClick={onLogin}> login</button>
    </FormControl>

  )
}


