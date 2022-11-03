import React from 'react'
import { IconButton, Input, Stack, Typography, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState, useEffect } from 'react'

import {Link} from 'react-router-dom';


function Navbar({ videos }) {
    const [input, setInput] = useState();

    const search = () => {
        console.log(input)
    }
    useEffect(() => {
        search()
    }, [input])
    return (
        <Stack direction='row' alignItems="center" sx={{ position: "sticky", justifyContent: 'space-between' }}>
            <Typography varient='h5' sx={{ backgroundColor: 'grey', display: 'flex', alignItems: 'center', color: "white", marginLeft: 10, p: 1 }}>
                <Link to="/">
                    <img style={{ height: '30px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" /><h2 style={{ marginLeft: '3px', pading: 0 }}>YouTube</h2>
                </Link>
            </Typography>
            <Paper component='form' sx={{ border: '1px solid', p1: 2 }}>
                <input onChange={(e) => setInput(() => e.target.value)} style={{ marginLeft: '15px', border: 'none', outline: 'none', width: '350px' }} placeholder='Search..'>

                </input>
                <IconButton sx={{ color: 'red' }}>
                    <SearchIcon />
                </IconButton>
            </Paper>

        </Stack>
    )
}

export default Navbar