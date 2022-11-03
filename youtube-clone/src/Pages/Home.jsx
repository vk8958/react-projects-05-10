import React from 'react'
import { Stack, Box } from '@mui/material'
import Sidebar from '../components/Sidebar'
import { Typography } from '@mui/material'
import Videos from '../components/Videos'


function Home({videos}) {
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box sx={{ height: { sx: 'auto', md: "95vh" }, borderRight: '0.01px solid grey', px: { sx: 0, md: 2 } }}>
                <Sidebar />
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: "row",marginTop:'-10px' }}>
                <Typography varient="h3" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                    Videos
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    )
}

export default Home