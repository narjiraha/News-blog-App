import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Bollywood from "../Pages/Bollywood/Bollywood";
import Hollywood from "../Pages/Hollywood/Hollywood";
import Fitness from "../Pages/Fitness/Fitness";
import Food from "../Pages/Food/Food";
import Technology from "../Pages/Technology/Technology";
// import Navbar from "../Navbar.js/Navbar";
import JsonStorage from "../JsonStorage/JsonStorage";
import ContactUs from "../Pages/Contact/ContactUs";
import Help from "../Pages/Help/Help";
import News from "../Pages/News/news";
// import Navbar2 from "../Navbar2/Navbar2";

const RoutesComp = () => {
  return (
    <div>
      {/* To provide access of JsonStorage file to every component */}
      <JsonStorage>
        {/* <Navbar2 /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bollywood" element={<Bollywood />}></Route>
          <Route path="/fitness" element={<Fitness />}></Route>
          <Route path="/hollywood" element={<Hollywood />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/news/:id" element={<News />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/help" element={<Help />}></Route>
        </Routes>
      </JsonStorage>
    </div>
  );
};

export default RoutesComp;
