import { Drawer , List, Box, ListItem, ListItemText} from '@mui/material'
import React from 'react'
import { SidebarHeader } from './SidebarHeader'
import { useCategories } from '../../redux'
import styled from '@emotion/styled'
import {Link} from "react-router-dom";





const StyledListItem=styled(ListItem)(()=>({
padding:"5px 0px 3px 15px",
margin : "0px" ,



}))
export const Sidebar = () => {
const sidebarItems=useCategories();
  return (
<Drawer
variant='permanent'
sx={{
display:{xs:"block"},
"& .MuiDrawer-paper" :{
    width:"200px" ,
    height:"500px",
    marginTop:"100px",
    backgroundColor:"#d7ccc8",
},

}}
open={true}
>

  <SidebarHeader>
    </SidebarHeader>  
    <List>
{sidebarItems.map((sideBarItem)=>{
    const {_id,name} =sideBarItem;
    return (<React.Fragment key={_id}>
       <Link to={`/products/categories/${name}?page=1&sort=name,asc`}>
        <Box sx={{display:"flex"}}>
<StyledListItem>
    <ListItemText secondary={name}/>
</StyledListItem>
        </Box>
       
        </Link>
    </React.Fragment>)
})}
    </List>

</Drawer>
  )
}


