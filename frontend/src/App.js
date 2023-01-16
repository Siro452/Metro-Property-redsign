import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing site pages
import Properties from "./pages/properties/properties";
import TestingForm from "./pages/properties/testingform"
import HomePage from "./pages/homepage/homepage";

import IndividualListing from "./pages/individuallisting/individuallisting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/PropertiesToRent" element={<Properties />}></Route>
          <Route path="/TestingForm" element={<TestingForm />}></Route>

          <Route path="/PropertyListing/:id" element={<IndividualListing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
