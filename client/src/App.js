import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import "./styles/style.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
