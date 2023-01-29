import { useState } from "react";


export const useForm=({defaultFormValues})=>{
const [formValues,setFormValues]=useState(defaultFormValues);
const onInputChange =(e)=>{
    const {validateInput}=formValues[e.target.name];
    setFormValues((prevFormValues)=>{
        return{
...prevFormValues,
[e.target.name]:{
    ...prevFormValues[e.target.name],
    value:e.target.value,
    error:validateInput?validateInput(e.target.value) :"",
},

};
    });
};


const checkButtonDissable=(values)=>{
    for(const [key,objValue]of Object.entries(values)){
        if(objValue.required && (objValue.error || !objValue.value)){
            return true;
        }
    }
};

const clearForm=(obj)=>{
    setFormValues(obj);
};

return {
    formValues,
    setFormValues,
    onInputChange,
    checkButtonDissable,
    clearForm,
};



};