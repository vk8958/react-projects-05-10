import React from 'react'
import './Sidebar.css'
import { Stack } from '@mui/material';
import categories from './SidebarData';


function Sidebar() {
  
    
  return (
   <Stack direction="row"  sx={{overflowY:'auto' ,height:{sx:'auto',md:"95%"},flexDirection:{md:'column'}}}>
   
    {categories.map((i)=>(
      <button className='sidebar-items' style={{display:'flex',alignItems:"center",height:"40px",fontWeight:'bold', textTransform:'capatalize',marginTop:'5px'}} >
       
        <span style={{marginRight:"15px" ,marginLeft:"10px",color:'red'}}>{i.icon}</span>
        <span style={{color:'white'}}>{i.name}</span>
      </button>
    ))}
   </Stack>
  )
}

export default Sidebar