import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../Home/Home"
import About from "../../About/About"
import Users from "../../Users/Users"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />}/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
