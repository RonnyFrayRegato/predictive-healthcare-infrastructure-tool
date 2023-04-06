import './insights-page.css'
import {Link} from 'react-router-dom';
import React from "react"

const MedicalAdminPageInsightsPollenMedications = () => {
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
                <Link to="/medicalAdminPage/insights/pollen-astemizole10">
                    <button className="medicine">Atemizole 10 MG</button>
                </Link>
                <Link to="/medicalAdminPage/insights/pollen-cetirizine-hydrochloride10">
                    <button className="medicine">Cetirizine Hydrochloride 10 MG</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/pollen-cetirizine-hydrochloride5">
                    <button className="medicine">Cetirizine Hydrochloride 5 MG</button>
                </Link>
                <Link to="/medicalAdminPage/insights/pollen-chlorpheniramine-maleate2">
                    <button className="medicine">Chlorpheniramine Maleate 2 MG/ML</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/pollen-chlorpheniramine-maleate4">
                    <button className="medicine">Chlorpheniramine Maleate 4 MG</button>
                </Link>
                <Link to="/medicalAdminPage/insights/pollen-diphenhydramine-hydrochloride25">
                    <button className="medicine">Diphenhydramine Hydrochloride 25 MG</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/pollen-fexofenadine-hydrochloride30">
                    <button className="medicine">Fexofenadine Hydrochloride 30 MG</button>
                </Link>
                <Link to="/medicalAdminPage/insights/pollen-fexofenadine-hydrochloride60">
                    <button className="medicine">Fexofenadine Hydrochloride 60 MG</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/pollen-loratadine10">
                    <button className="medicine">Loratadine 10 MG</button>
                </Link>
                <Link to="/medicalAdminPage/insights/pollen-loratadine5">
                    <button className="medicine">Loratadine 5 MG</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/pollen-epinephrine1">
                    <button className="medicine">Epinephrine 1 MG/ML</button>
                </Link>
                <Link to="/medicalAdminPage/insights/pollen-terfenadine60">
                    <button className="medicine">Terfenadine 60 MG</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights">
                    <button className="back">Back</button>
                </Link>
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageInsightsPollenMedications;
