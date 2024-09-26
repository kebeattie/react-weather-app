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
      <Box sx={{ backgroundColor: '#8fe0ff', height: '100vh', width: '100%', p: '10px' }}>
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