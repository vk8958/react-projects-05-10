import React from 'react';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar1() {
    return (

        <div className='nav'>
            <h3>Dashboard</h3>
            <div className='icons'>
                <SearchIcon />
                <img style={{height:'15px', marginTop:"5px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" alt="" />
                <GridViewIcon/>
                <NotificationAddIcon/>
                <SettingsIcon/>
                <div className='profile-img'></div>
            </div>
        </div>

    )
}

export default Navbar1