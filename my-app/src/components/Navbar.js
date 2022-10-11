import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Navbar.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function Navbarr() {
  return (
    <Container>
      <Navbar className='Nav' expand="lg" variant="light" bg="dark">
        <div id='start' className='start-last'>
          <img src="https://thumbs.dreamstime.com/b/demo-icon-demo-147077326.jpg" alt="" />
        </div>
        <Container className='nav-items'>

          <div className="items">
            <VideocamIcon />
            <p>LIVE</p>
          </div>
          <div className="items">
            <ChromeReaderModeIcon />
            <p>MEMBERSHIP</p>
          </div>
          <div className="items">
            <DirectionsRunOutlinedIcon />
            <p>PLANS</p>
          </div>
          <div className="items">
            <MoreVertOutlinedIcon />
            <p>MORE</p>
          </div>

        </Container>
        <div id='last' className='start-last'>
          <PermIdentityIcon />
          <p>login</p>
        </div>
      </Navbar>
      <hr />
    </Container>
  );
}

export default Navbarr;