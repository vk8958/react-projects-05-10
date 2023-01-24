import React from 'react';
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StyleIcon from '@mui/icons-material/Style';
import PortraitIcon from '@mui/icons-material/Portrait';

const data = [
    {
        "icon": <HomeIcon />,
        "name": 'Home',

    },
    {
        "icon": <SearchIcon />,
        "name": 'Search',

    },
    {
        "icon": <TrendingUpIcon />,
        "name": 'Statics',

    },
    {
        "icon": <StyleIcon />,
        "name": 'Cards',

    },
    {
        "icon": <PortraitIcon />,
        "name": 'Profile',

    },
]
 


const Navbar = () => {
      const fun=()=>{
             
      }
    
    return (
        <div onMouseOver={fun} className='outer' style={{ display: 'flex', border: '0px solid black' }}>
            {
                data.map((e, i) => {
                    return <div className="inner" style={{ display: 'flex',justifyContent:'center', }}>
                        <div > {e.icon}
                        </div>
                        
                          <small style={{marginLeft:'5px',marginTop:'3px', fontFamily:"revert-layer",fontWeight:'500'}}>{e.name} </small>  
                       
                     </div>

                })
            }
        </div>
    )
}

export default Navbar;