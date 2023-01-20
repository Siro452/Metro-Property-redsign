import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing site pages
import Properties from "./pages/properties/properties";
import TestingForm from "./pages/properties/testingform";
import HomePage from "./pages/homepage/homepage";
import WhyRent from "./pages/whyrent/whyrent";
import IndividualListing from "./pages/individuallisting/individuallisting";
import Codefrommission5a from "./codefrommission5a";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/PropertiesToRent" element={<Properties />}></Route>
          <Route path="/TestingForm" element={<TestingForm />}></Route>
          <Route
            path="/PropertyListing/:id"
            element={<IndividualListing />}
          ></Route>
          <Route path="/WhyRent" element={<WhyRent />}></Route>
          <Route
            path="/codefrommission5a"
            element={<Codefrommission5a />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
