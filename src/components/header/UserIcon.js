import { Avatar, IconButton, MenuItem, Menu, Button,  } from '@mui/material'

import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logOutUser, useUserInfo } from '../../redux';
import { getUserInitials } from '../../application/utils';
import { useDispatch } from 'react-redux';
import { isUserAdmin } from '../../application/utils';
import styled from "@emotion/styled";




const StyledAvatar=styled(Avatar)(() => ({
    backgroundColor:"#efebe9",
    color:"black",
   
  }));


export const UserIcon = () => {
    const [anchor,setAnchor]=useState(null);
    const handleClose = () => {
        setAnchor(null);
      };
      const userInfo=useUserInfo();
      console.log(useUserInfo());
      const navigate=useNavigate();
      const dispatch=useDispatch();




const onLogIn=()=>{
 
 navigate ("/login");
};
    
  return (

<Box>
<IconButton onClick={(e)=>{
    setAnchor(e.currentTarget);
}}>
    <StyledAvatar>
        {getUserInitials(userInfo.firstName, userInfo.lastName )}
        
    </StyledAvatar>
</IconButton>
<Box>
    <Menu anchorEl={anchor}
    anchorOrigin={{
            vertical:"bottom",
            horizontal:"right",
        }}
    keepMounted
    transformOrigin={{
        vertical:"top",
            horizontal:"left",
    }}

    open={Boolean(anchor)}
    onClose={handleClose}
    >
       { !!userInfo && 
       ( <MenuItem onClick={handleClose}>
<Button>profile</Button>
<Button onClick={()=>dispatch(logOutUser())}>logout</Button>
{isUserAdmin(userInfo) && <Button onClick={() => {
                          navigate ( "/products/new");
                         
                          

                      } }> add product</Button>}


</MenuItem>)} 
{!userInfo && (
    <><Button onClick={() => {
                          navigate ("/register");
                      } }
                      >
                          register
                      </Button>
                      <Button onClick={()=>{
                        onLogIn()} }>
                              login
                          </Button></>

)}

    </Menu>
</Box>

</Box>

  )
   
  
}
