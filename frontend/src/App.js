import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing site pages
import Properties from "./pages/properties/properties";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/PropertiesToRent" element={<Properties />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
