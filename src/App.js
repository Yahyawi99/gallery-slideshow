import React from "react";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./home/Home";
import Sildeshow from "./sildeshow/Sildeshow";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slideshow/:id" element={<Sildeshow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
