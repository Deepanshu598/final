const Forecast = ({ forecast }) => {
    return forecast.length > 0 ? (
        <div style={styles.container}>
            <h2 style={styles.title}>5-Day Forecast</h2>
            <div style={styles.forecastList}>
                {forecast.map((day, index) => (
                    <div key={index} style={styles.forecastItem}>
                        <p style={styles.date}><strong>{new Date(day.dt_txt).toDateString()}</strong></p>
                        <p style={styles.temp}>{day.main.temp}°C</p>
                        <p style={styles.description}>{day.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <p style={styles.noData}>No forecast available</p>
    );
};

const styles = {
    container: {
        marginTop: "20px",
        textAlign: "center",
    },
    title: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px",
    },
    forecastList: {
        display: "flex",
        gap: "15px",
        overflowX: "auto",
        padding: "10px",
        justifyContent: "center",
    },
    forecastItem: {
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        minWidth: "130px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    date: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#444",
    },
    temp: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#222",
    },
    description: {
        fontSize: "14px",
        color: "#555",
    },
    noData: {
        fontSize: "16px",
        color: "#888",
    },
};

export default Forecast;
