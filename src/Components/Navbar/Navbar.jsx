import React from 'react'

import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import AirIcon from '@mui/icons-material/Air';

import './Navbar.css';

const Navbar = () => {
  return (
    <>
        <Stack
        direction='row'
        alignItems='center'
        pt={2}
        pb={2}
        sx={{position: 'sticky', background: '#1d1d1d', top: 0, justifyContent: 'space-between', width:{xs: '100%', md: '80%'}, margin: '0 auto', borderRadius: '10px'}}
        >
            <Link to ='/' style={{display: 'flex', alignItems: 'center'}}>
                {/* <img id='logo' src={Logo} alt='logo'/> */}
                <AirIcon 
                sx={{color: '#82932a', marginLeft: '25px'}}
                />
                <Typography 
                variant='h5'
                color='white'
                margin={0.5}
                >
                  React Weather

                </Typography>
            </Link>

        </Stack>
    </>
  )
}

export default Navbar