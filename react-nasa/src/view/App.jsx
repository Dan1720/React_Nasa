//import { useState } from 'react'
import './App.css'
import Logo from "../assets/logo.png"
import Nasa_logo from "../assets/nasa_logo.png"
import Unimib from "../assets/bicocca.png"
import { Route, Routes } from 'react-router-dom';

import MainTemplate from './components/MainTemplate/MainTemplate';
import Home from './Home'
import Images from './Images';

function App() {

  const nav = [
    { url: "/", text: "Home"},
    { url: "/images", text: "Images"}
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
        <Route path="/images" element={<Images />} />
      </Routes>

    </MainTemplate>
  );
}

export default App
