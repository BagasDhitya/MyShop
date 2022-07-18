import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
