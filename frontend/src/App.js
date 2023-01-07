import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importing site pages
import Properties from "./pages/properties/properties";


function App() {
 



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Properties />}></Route>
          <Route path="/PropertiesToRent" element={<Properties />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
