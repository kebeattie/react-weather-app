import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import './Search.css';

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
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 0,
                backgroundColor: '#54416d',
                padding: 5,
                boxShadow: 'none',
                width: { xs: '50%', md: '60%', lg: '40%' },
                margin: { xs: '25% auto', md: '5% auto' },
            }}
        >
            <Typography variant='h4' color='#fff'>
                Find a forecast
            </Typography>

            <input
                className='search-bar'
                placeholder='Search for a location'
                value={input}
                onChange={handleInputChange}
                aria-label='Search for a location' // Accessibility improvement
            />
            <IconButton type='submit' sx={{ padding: 0, color: '#8fe0ff' }}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;