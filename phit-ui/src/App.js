import React from "react"
import './App.css';
import HomePage from './pages/home-page/home-page.js';
import MedicalAdminPageSupply from './pages/medical-admin-page/medical-admin-page-supply.js';
import MedicalAdminPagePatients from './pages/medical-admin-page/medical-admin-page-patients.js';
import MedicalAdminPageAllergies from './pages/medical-admin-page/medical-admin-page-allergies';
import MedicalAdminPageMedications from "./pages/medical-admin-page/medical-admin-page-medications";
import MedicalAdminPageInsights from "./pages/medical-admin-page/medical-admin-page-insights";
import MedicalAdminPageInsightsDiabetes from "./pages/medical-admin-page/medical-admin-page-insights-diabetes";
import MedicalAdminPageInsightsDiabetesMedications
    from "./pages/medical-admin-page/medical-admin-page-insights-diabetes-medications";
import MedicalAdminPageInsightsDiabetesInsulin
    from "./pages/medical-admin-page/medical-admin-page-insights-diabetes-insulin";
import MedicalAdminPageInsightsPeanutAllergy
    from "./pages/medical-admin-page/medical-admin-page-insights-peanut-allergy";
import MedicalAdminPageInsightsPeanutAllergyMedications
    from "./pages/medical-admin-page/medical-admin-page-insights-peanut-allergy-medications";
import SystemAdminHomePage from './pages/system-admin-page/system-admin-home-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/medicalAdminPage/supply" element={<MedicalAdminPageSupply/>}/>
            <Route path="/medicalAdminPage/patients" element={<MedicalAdminPagePatients/>}/>
            <Route path="/medicalAdminPage/medications" element={<MedicalAdminPageMedications/>}/>
            <Route path="/medicalAdminPage/allergies" element={<MedicalAdminPageAllergies/>}/>
            <Route path="/medicalAdminPage/insights" element={<MedicalAdminPageInsights/>}/>
            <Route path="/medicalAdminPage/insights/diabetes" element={<MedicalAdminPageInsightsDiabetes/>}/>
            <Route path="/medicalAdminPage/insights/diabetes-insulin" element={<MedicalAdminPageInsightsDiabetesInsulin/>}/>
            <Route path="/medicalAdminPage/insights/diabetes-medications" element={<MedicalAdminPageInsightsDiabetesMedications/>}/>
            <Route path="/medicalAdminPage/insights/peanutAllergy" element={<MedicalAdminPageInsightsPeanutAllergy/>}/>
            <Route path="/medicalAdminPage/insights/peanutAllergy-medications" element={<MedicalAdminPageInsightsPeanutAllergyMedications/>}/>

            <Route path="/systemAdminPage/home" element={<SystemAdminHomePage/>}/>
        </Routes>
    </BrowserRouter>);
}

export default App;
