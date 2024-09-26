import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../../assets/react-weather-high-resolution-logo-transparent.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
        <Stack
        direction='row'
        alignItems='center'
        p={2}
        sx={{position: 'sticky', background: '#54416d', top: 0, justifyContent: 'space-between', width:'80%', margin: '0 auto', borderRadius: '10px'}}
        >
            <Link to ='/' style={{display: 'flex', alignItems: 'center'}}>
                <img id='logo' src={Logo} alt='logo'/>
            </Link>

        </Stack>
    </>
  )
}

export default Navbar