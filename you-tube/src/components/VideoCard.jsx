import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const VideoCard = ({ video }) => {


    return (
        <Card sx={{ width: {xs:'356px',md:'310px'}, boxShadow: "none", borderRadius: 0 }}>
            <Link to={video.id.videoId && `/video/${video.id.videoId}`}>
                <CardMedia image={video.snippet.thumbnails.high.url} alt={"Image not found"} sx={{ width: "100%", height: 160 }} />
            </Link>
            <CardContent sx={{ backgroundColor: '#1E1E1E', textAlign: 'left' }}>
                <Link to={video.id.videoId && `/video/${video.id.videoId}`}>
                    <Typography varient="subtitle" color="#fff" fontSize="" height="55px">
                        {video.snippet.title}
                    </Typography>
                </Link>

                <Link to={video.snippet.channelId && `/video/${video.snippet.channelId}`}>
                    <Typography marginTop="5px">
                        {video.snippet.channelTitle}
                        <CheckCircleIcon sx={{ fontSize: 12, marginLeft: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard