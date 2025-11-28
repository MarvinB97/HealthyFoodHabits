import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bienvenida from './pages/Bienvenida'
import Registro from './pages/Registro'
import Encuesta from './pages/Encuesta'
import Home from './pages/Home'
import RegistroAlimentos from './pages/RegistroAlimentos'
import GrupoFamiliar from './pages/GrupoFamiliar'
import GrupoFamiliarCreate from './pages/GrupoFamiliarCreate';
import GrupoFamiliarJoin from './pages/GrupoFamiliarJoin';
import Estadisticas from './pages/Estadisticas'
import Perfil from './pages/Perfil'
import GrupoFamiliarLista from './pages/GrupoFamiliarLista';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/registro" element={<Registro/>}/>
        <Route path='/encuesta' element={<Encuesta/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path='/registro-alimentos' element={<RegistroAlimentos/>}/>
        <Route path='/grupo-familiar' element={<GrupoFamiliar/>}/>
        <Route path='/grupo-familiar-create' element={<GrupoFamiliarCreate/>}/>
        <Route path='/grupo-familiar-join' element={<GrupoFamiliarJoin/>}/>
        <Route path='/grupo-familiar-lista' element={<GrupoFamiliarLista/>}/>
        <Route path='/estadisticas' element={<Estadisticas/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
