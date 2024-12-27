import React from "react";
import "./style.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return ( 
    <div class="text-3xl font-bold underline">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
