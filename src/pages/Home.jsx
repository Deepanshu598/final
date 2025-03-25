import { useState } from "react";
import SearchBar from "../components/SearchBar"
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import { fetchForecast, fetchWeather } from "../api/WeatherApi";


const Home = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);

    const handleSearch = async (city) => {
        try {
            const weatherData = await fetchWeather(city);
            setWeather(weatherData);

            const forecastData = await fetchForecast(city);
            setForecast(forecastData.list.filter((_, index) => index % 8 === 0));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Weather Dashboard</h1>
            <SearchBar onSearch={handleSearch} />
            {weather && <CurrentWeather weather={weather} />}
            {forecast.length > 0 && <Forecast forecast={forecast} />}
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
    },
    title: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
    },
};

export default Home;
