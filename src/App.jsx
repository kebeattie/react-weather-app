import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import SearchBar from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import SearchFeed from './Components/SearchFeed/SearchFeed';
import ErrorBoundary from './Components/ErrorBoundary'; // Import the ErrorBoundary

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#ffffff', height: '100vh', width: '95%', p: '10px', margin: '0 auto' }}>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<SearchBar />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </ErrorBoundary>
      </Box>
    </BrowserRouter>
  );
};

export default App;