import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city);
            setCity("");
        }
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleSearch} style={styles.button}>
                Search
            </button>
        </div>
    );
};

const styles = {
    container: {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
    },
    input: {
        padding: "10px",
        width: "250px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none",
    },
    button: {
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "white",
        cursor: "pointer",
        transition: "background 0.3s",
    },
};

export default SearchBar;
