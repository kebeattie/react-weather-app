import axios from 'axios';

export const fetchWeatherData = async (latitude, longitude) => {
    //const apiKey = '2d05883852e6679dea8af8488a408f09'; // Ensure this is correct
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        //console.log(response.data);
        return response;
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
};



// Function to fetch location data
export const fetchLocationData = async (query) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Replace with your actual API key
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        // console.log(response.data); // Handle the response data
        return response;
    } catch (error) {
        console.error('Error fetching the location data:', error);
    }
};


