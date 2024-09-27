import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton, Typography, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import './Search.css';
import Hero from '../../assets/file.jpg';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Input validation
        if (!input.trim()) {
            alert('Please enter a location');
            return;
        }

        // Navigate to the search results page
        navigate(`/search/${input.trim()}`);

        // Clear the input field
        setInput('');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '100%', md: '80%' },
                height: '50%',
                backgroundColor: '#000',
                margin: { xs: '5% auto 0 auto', md: '1% auto 0 auto' },
                backgroundImage: `url(${Hero})`,
                borderRadius: '10px'
            }}


        >



            <br></br>
            <Paper
                component='form'
                onSubmit={handleSubmit}
                sx={{
                    borderRadius: '5px',
                    backgroundColor: 'rgba(29, 29, 29, 0.8)',
                    padding: 5,
                    boxShadow: 'none',
                    width: { xs: '65%', small: '70%', md: '75%', lg: '40%' },
                    margin: { xs: '25% auto', md: '5% auto' },

                }}

            >
                <Typography
                    variant='h4'
                    color='#fff'
                    sx={{
                        fontSize: { xs: '1.2rem', md: '2rem' },
                        // backgroundColor: 'rgba(142,142,142,255)'
                    }}
                >
                    Find a forecast
                </Typography>
                <br></br>



                <TextField
                    variant="outlined"
                    placeholder='Search for a location'
                    value={input}
                    onChange={handleInputChange}
                    sx={{
                        backgroundColor: '#fff',
                        width: { xs: '100%', md: '100%' },

                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type='submit' sx={{ padding: 0, color: '#1d1d1d' }}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    fullWidth
                />
            </Paper>

        </Box>
    );
}

export default SearchBar;