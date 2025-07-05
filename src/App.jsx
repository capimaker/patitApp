import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register/Register";

function App() {

  return (
  
    <div className = "App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<Register/>}/>
         <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  
  )
}

export default App;
