//import { useState } from 'react'
import './App.css'
import Logo from "../assets/logo.png"
import Nasa_logo from "../assets/nasa_logo.png"
import Unimib from "../assets/bicocca.png"
import { Route, Routes } from 'react-router-dom';

import MainTemplate from './components/MainTemplate/MainTemplate';
import Home from './Home'
import Gallery from './Gallery';
import ImageDetail from './components/ImageDetail/ImageDetail';

function App() {

  const nav = [
    { url: "/", text: "Home"},
    { url: "/gallery", text: "Gallery"}
  ];


  

  return (
    <MainTemplate
      navItems = {nav}
      logo = {Logo}
      nasa_logo = {Nasa_logo}
      bicocca = {Unimib}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/image/:nasaId" element={<ImageDetail />} />
      </Routes>

    </MainTemplate>
  );
}

export default App
