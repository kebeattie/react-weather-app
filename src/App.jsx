import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import './App.css';
import SearchBar from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import { fetchWeatherData } from './Utils/fetchFromApi';

const App = () => {

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
  fetchWeatherData(51.5074, -0.1278) // Coordinates for London
    .then((data) => setWeatherData(data)) 
  }, [weatherData])

  console.log(weatherData);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#8fe0ff', height: '100vh', width: '100%', p: '10px' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<SearchBar />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;