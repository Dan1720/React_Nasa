//import { useState } from 'react'
import './App.css'
import Logo from "../assets/logo.png"
import Nasa_logo from "../assets/nasa_logo.png"
import { Route, Routes } from 'react-router-dom';

import MainTemplate from './components/MainTemplate/MainTemplate';
import Home from './Home'

function App() {

  const nav = [
    { url: "/", text: "Home"}
  ];


  

  return (
    <MainTemplate
      navItems = {nav}
      logo = {Logo}
      nasa_logo = {Nasa_logo}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </MainTemplate>
  );
}

export default App
