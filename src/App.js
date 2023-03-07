import React,{useState,useEffect} from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import Resume from "./pages/resume"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<About/>}/>
      <Route path ="/portfolio" element={<Portfolio/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/resume" element={<Resume/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
