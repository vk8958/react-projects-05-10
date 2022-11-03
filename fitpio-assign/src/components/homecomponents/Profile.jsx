import React from 'react'
import './Profile.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';

function Profile() {
    return (
        <div className='profile-main'>
            <div className='inner-top'>
                <MoreHorizIcon style={{ marginTop: "0", marginRight: "-200px", color: "white" }} />
            </div>
            <div className='img'>

            </div>
            <h3 style={{ textAlign: "center", fontWeight: "500" }}>Jennifer Bennett</h3>
            <h4 style={{ textAlign: "center", fontWeight: "500", color: "grey", marginTop: "-17px" }} >Product Designer</h4>
            <div style={{ display: "flex", justifyContent: "space-between", marginInline: '40px', marginTop: "-20px" }}>
                <div>

                    <h3 style={{ textAlign: "center", fontWeight: "500" }}>1,269</h3>
                    <h4 style={{ textAlign: "center", fontWeight: "500", color: "grey", marginTop: "-17px" }} >Products</h4>
                </div>
                <div>

                    <h3 style={{ textAlign: "center", fontWeight: "500" }}>5.2k</h3>
                    <h4 style={{ textAlign: "center", fontWeight: "500", color: "grey", marginTop: "-17px" }} >Followers</h4>
                </div>
            </div>
            <hr style={{ marginInline: "30px", color: "grey" }} />
            <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", marginInline: "25px", marginTop: "-15px", color: 'grey' }}>
                <h5>Earning</h5>
                <InfoIcon style={{ scale: "0.8" }} />
            </div>

        </div>
    )
}

export default Profile