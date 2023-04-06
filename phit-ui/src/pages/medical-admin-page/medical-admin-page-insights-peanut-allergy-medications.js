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
                <Link to="/medicalAdminPage/insights/peanutAllergy-terfenadine">
                    <button className="medicine">Terfenadine</button>
                </Link>
                <Link to="/medicalAdminPage/insights/peanutAllergy-astemizole">
                    <button className="medicine">Astemizole</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/peanutAllergy-epinephrine">
                    <button className="medicine">Epinephrine</button>
                </Link>
                <Link to="/medicalAdminPage/insights/peanutAllergy-cetrizine-hydrochloride">
                    <button className="medicine">Cetrizine Hydrochloride</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/peanutAllergy-chlorpheniramine-maleate">
                    <button className="medicine">Chlorpheniramine Maleate</button>
                </Link>
                <Link to="/medicalAdminPage/insights/peanutAllergy-fexofendadine-hydrochloride">
                    <button className="medicine">Fexofenadine Hydrochloride</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/peanutAllergy-diphenhydramine-hydrochloride">
                    <button className="medicine">Diphenhydramine Hydrochloride</button>
                </Link>
                <Link to="/medicalAdminPage/insights/peanutAllergy-lortadine">
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
