import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1 style={styles.error}>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

const styles = {
  error: {
    textAlign: "center",
    marginTop: "50px",
    color: "red",
    fontSize: "24px",
  },
};

export default App;
