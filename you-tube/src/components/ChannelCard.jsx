import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ChannelCard = ({ channelDetails }) => {

  return (
    <Box 
    sx={{ boxShadow: 'none',
     borderRadius: "20px",
     display:"flex",
     justifyContent:"center",
     alignItems:'center',
     width:{xs:'356px',md:'310px'},
     height:"300px",
     
     }}>

      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: "#fff" }}>

          <CardMedia
            image={channelDetails.snippet.thumbnails.high.url}
            alt={channelDetails.snippet.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', md: 2, border: '1px solid #e3e3e3' }}
         />

        
          <Typography varient="h6" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {channelDetails?.snippet?.title}

            <CheckCircleIcon sx={{ fontSize: 14, marginLeft: '5px' }} />
          </Typography>
          
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard