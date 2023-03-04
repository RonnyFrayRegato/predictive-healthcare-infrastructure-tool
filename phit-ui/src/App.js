import React from "react"
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import HomePage from './pages/home-page/home-page.js';
import MedicalAdminPageSupply from './pages/medical-admin-page/medical-admin-page-supply.js';
import MedicalAdminPagePatients from './pages/medical-admin-page/medical-admin-page-patients.js';
import MedicalAdminPageAllergies from './pages/medical-admin-page/medical-admin-page-allergies';
import SystemAdminHomePage from './pages/system-admin-page/system-admin-home-page';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicalAdminPage/supply" element={<MedicalAdminPageSupply />} />
        <Route path="/medicalAdminPage/patients" element={<MedicalAdminPagePatients />} />
        <Route path="/medicalAdminPage/allergies" element={<MedicalAdminPageAllergies />} />
        <Route path="/systemAdminPage/home" element={<SystemAdminHomePage />} />

    </Routes>
</BrowserRouter>


  );
  
}

export default App;
