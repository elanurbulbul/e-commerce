import React from "react";
import "./style.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./conteiners/PageContainer";
import "slick-carousel/slick/slick.css";    
import "slick-carousel/slick/slick-theme.css";  
import Detail from "./pages/Detail";

function App() {
  return (
    <div className=" font-bold ">
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail/>} />

          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
