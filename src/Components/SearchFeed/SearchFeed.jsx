import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLocationData, fetchWeatherData } from '../../Utils/fetchFromApi';
import { Box, Typography } from '@mui/material';
import DailyWeatherTile from '../DailyWeatherTile/DailyWeatherTile';
import Hero from '../../assets/file.jpg';

const SearchFeed = () => {
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Add error state
    const { searchTerm } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Reset loading state on new fetch
            setError(null); // Reset error state
            try {
                const { data } = await fetchLocationData(searchTerm);
                const { lat, lon } = data[0];

                const weatherDataResponse = await fetchWeatherData(lat, lon);
                setWeatherData(weatherDataResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load weather data.'); // Update state for error handling
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm]);

    if (loading) {
        return <div>Loading...</div>; // Loading message
    }

    if (error) {
        return <div>{error}</div>; // Display error message
    }

    const today = new Date();
    const getFormattedDate = (index) => {
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + index);
        return tomorrow.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <Box
            height='50%'
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
            borderRadius='10px'
            sx={{
                overflowY: 'scroll',
                backgroundImage: `url(${Hero})`,
                margin: { xs: '5% auto 0', md: '1% auto 0' },
                width: { xs: '100%', md: '80%' },
            }}
        >
            <Typography variant='h3' color='white' sx={{ position: { xs: 'fixed', md: 'relative' }, top: { xs: '150px', md: '0' } }}>
                {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}
            </Typography>

            <Box
                display='flex'
                width='100%'
                justifyContent='space-evenly'
                alignItems='center'
            >
                {weatherData.daily?.map((item, idx) => (
                    <DailyWeatherTile 
                        key={idx} 
                        date={getFormattedDate(idx)} 
                        max={Math.trunc(item.temp.max)} 
                        min={Math.trunc(item.temp.min)} 
                        icon={item.weather[0]?.icon} // Use optional chaining for safety
                    />
                )) || <div>No daily weather data available.</div>} {/* Fallback for no data */}
            </Box>
        </Box>
    );
};

export default SearchFeed;