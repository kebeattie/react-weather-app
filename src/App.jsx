import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css'
import Search from './Components/Search';
import Navbar from './Components/Navbar/Navbar';
const App = () => {

  return (
    <>
    <BrowserRouter>
      <Box sx={{backgroundColor: '#8fe0ff', height: '100vh', width: '100%', p: '10px'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
    </>
  )
}

export default App
