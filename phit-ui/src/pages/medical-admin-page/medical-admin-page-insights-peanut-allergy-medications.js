import './insights-page.css'
import {Link} from 'react-router-dom';
import React from "react"

const MedicalAdminPageInsightsPeanutAllergyMedications = () => {
    return (<div className="medical-admin">
        <div className="medical-admin-header">
            <div className="medical-admin-header-text">
                PHIT
            </div>
        </div>
        <div>
            <div className="medical-admin-insights-title">
                Select a Medication:
            </div>
            <div className="row">
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Terfenadine</button>
                </Link>
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Astemizole</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Epinephrine</button>
                </Link>
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Cetrizine Hydrochloride</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Chlorpheniramine Maleate</button>
                </Link>
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Fexofenadine Hydrochloride</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Diphenhydramine Hydrochloride</button>
                </Link>
                <Link to="/medicalAdminPage/insights/diabetes-insulin">
                    <button className="medicine">Loratadine</button>
                </Link>
                <br/>

                <Link to="/medicalAdminPage/insights">
                    <button className="back">Back</button>
                </Link>
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageInsightsPeanutAllergyMedications;
