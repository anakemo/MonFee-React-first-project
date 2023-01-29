import React from 'react'
import { TextField, Typography } from '@mui/material';

export const TextFieldComponent = ({name,label,value,onChange,error}) => {
  return (
    <TextField
    className='TextFieldComp'
    variant="outlined" 
    margin="dense"
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    error={error}
    helperText={
      <Typography component="span" variant="body2">
        {error}
      </Typography>
    }
    
    
    />
  );
};


