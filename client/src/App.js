import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./styles/style.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes></Routes>
    </div>
  );
};

export default App;
