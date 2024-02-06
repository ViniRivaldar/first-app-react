import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/home/index";
import Users from "./containers/users/index";

function RoutesComponent() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/usuarios" element={<Users/>} />
        </Routes>
        
    </Router>
  );
}

export default RoutesComponent;
