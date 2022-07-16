import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
