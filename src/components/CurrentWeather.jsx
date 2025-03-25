const CurrentWeather = ({ weather }) => {
    return weather ? (
        <div style={styles.container}>
            <h2 style={styles.city}>{weather.name}, {weather.sys.country}</h2>
            <p style={styles.text}><strong>Temperature:</strong> {weather.main.temp}°C</p>
            <p style={styles.text}><strong>Condition:</strong> {weather.weather[0].description}</p>
            <p style={styles.text}><strong>Humidity:</strong> {weather.main.humidity}%</p>
            <p style={styles.text}><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
    ) : (
        <p style={styles.noData}>No data available</p>
    );
};

const styles = {
    container: {
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "320px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        margin: "20px auto",
        textAlign: "center",
    },
    city: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px",
    },
    text: {
        fontSize: "16px",
        margin: "5px 0",
    },
    noData: {
        fontSize: "16px",
        color: "#888",
    },
};

export default CurrentWeather;
