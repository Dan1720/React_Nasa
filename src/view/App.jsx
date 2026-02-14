//import { useState } from 'react'
import './App.css'
import Logo from "../assets/logo.png"
import Nasa_logo from "../assets/nasa_logo.png"
import { Route, Routes } from 'react-router-dom';

import MainTemplate from './components/MainTemplate/MainTemplate';
import Home from './Home'
import Gallery from './Gallery';
import ImageDetail from './components/ImageDetail/ImageDetail';
import NotFound from './components/NotFound/NotFound';

/**
 * Componente principale dell'applicazione.
 * 
 * Si occupa di:
 * - Definire i link di navigazione
 * - Fornire i loghi e le informazioni visive al template
 * - Gestire le rotte dell'app tramite react-router-dom
 */
function App() {

  // Lista degli elementi della navbar
  const nav = [
    { url: "/", text: "Home"},
    { url: "/gallery?search=Galaxy", text: "Gallery"}
  ];


  

  return (

    <MainTemplate
      navItems = {nav}
      logo = {Logo}
      nasa_logo = {Nasa_logo}
    > 
      {/* Definizione delle rotte principali dell'app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/image/:nasaId" element={<ImageDetail />} />
        <Route path="*" element={<NotFound />}/> {/*Gestione rotta non valida*/}
      </Routes>

    </MainTemplate>
  );
}

export default App
