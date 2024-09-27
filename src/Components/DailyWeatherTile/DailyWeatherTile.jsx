import React from 'react';
import { Box, Typography } from '@mui/material';
import './DailyWeatherTile.css';

const DailyWeatherTile = ({ date, max, min, icon }) => {
  const tileStyles = {
    width: '100px',
    height: '100px',
    border: '1px solid black',
    backgroundColor: '#1d1d1d',
    borderRadius: '10px',
    margin: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const weatherBoxStyles = {
    width: '100px',
    height: '75px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  };

  const iconContainerStyles = {
    width: '50px',
    height: '75px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const tempBoxStyles = {
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <Box sx={tileStyles}>
      <Typography fontSize={14} color='white'>
        {date}
      </Typography>
      <Box sx={weatherBoxStyles}>
        <Box sx={iconContainerStyles}>
          <img 
            id='weather-icon' 
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt={`Weather icon for ${date}`} 
          />
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Box sx={{ ...tempBoxStyles, height: '37.5px' }}>
            {max}°C
          </Box>
          <Box sx={{ ...tempBoxStyles, height: '37.5px', fontSize: 13 }}>
            {min}°C
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DailyWeatherTile;