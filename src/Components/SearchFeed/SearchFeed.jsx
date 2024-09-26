import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLocationData, fetchWeatherData } from '../../Utils/fetchFromApi';

const SearchFeed = () => {
    const [weatherData, setWeatherData] = useState({});
    const [lat, setLat] = useState('0');
    const [lon, setLon] = useState('0');
    const [loading, setLoading] = useState(true);  // Loading state
    const { searchTerm } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationData = await fetchLocationData(searchTerm);
                setLat(locationData.data[0].lat);
                setLon(locationData.data[0].lon);
                
                const weatherDataResponse = await fetchWeatherData(locationData.data[0].lat, locationData.data[0].lon);
                setWeatherData(weatherDataResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);  // Set loading to false once data is fetched
            }
        };

        fetchData();
    }, [searchTerm]);

    if (loading) {
        return <div>Loading...</div>;  // Loading message
    }

    return (
        <div>{JSON.stringify(weatherData)}</div>
    );
};

export default SearchFeed;