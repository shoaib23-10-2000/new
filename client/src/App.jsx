import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Portfolio from "./Pages/Portfolio";
import Explore from "./Pages/Explore";

const App = () => (
  <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
      </Routes>
  </Router>
)
export default App;