import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'

function VideoCard({ video }) {
  return (
    <Card sx={{ width: "280px", boxShadow: "none", borderRadius: 0 }}>

      <CardMedia image={video.snippet.thumbnails.high.url} alt={"Image not found"} sx={{ width: "100%", height: 160 }} />
      <CardContent  sx={{ backgroundColor: '#1E1E1E', textAlign:'left'}}>

        <Typography varient="subtitle" color="#fff" fontSize="" height="55px">
          {video.snippet.title}
        </Typography>

        <Typography marginTop="5px">
          {video.snippet.channelTitle}
          <CheckCircleIcon sx={{fontSize:12 ,marginLeft:'5px'}} />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard