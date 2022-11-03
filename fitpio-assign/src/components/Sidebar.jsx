import React from 'react'
import './Sidebar.css'
import GridViewIcon from '@mui/icons-material/GridView';


var data = [
  {
    title: "MENU",
    icon: <GridViewIcon />,
    name: 'Dashboard',
  },
  {
    title: "MENU",
    icon: <GridViewIcon />,
    name: 'Dashboard',
  },
  {
    title: "MENU",
    icon: <GridViewIcon />,
    name: 'Dashboard',
  },
  {
    title: "MENU",
    icon: <GridViewIcon />,
    name: 'Dashboard',
  },
  {
    title: "MENU",
    icon: <GridViewIcon />,
    name: 'Dashboard',
  }
]



function Sidebar() {
  return (
   
    <div className='sidebar'>
    {data.map((e,i)=>(
      <>
       <h5>{e.title}</h5>
           <div style={{display:'flex',alignItems:'center'}}>
            {e.icon} 
            <h3 style={{marginLeft:'5px'}}>{e.name}</h3>
           </div>
      </>
          
    ))}
    </div>
  )
}

export default Sidebar