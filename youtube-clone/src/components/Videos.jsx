import React from "react";
import { useState } from "react";


import { Stack,Box } from '@mui/material'
import VideoCard from "./VideoCard";


const Videos = ({videos}) => {
    
   

   

  


    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>

            {videos.map((item, id) =>
                <Box> <VideoCard video={item} /> </Box>
            )}
        </Stack>
    )
}

export default Videos;