import './insights-page.css'
import {Link} from 'react-router-dom';
import React from "react"

const MedicalAdminPageInsightsDiabetesMedications = () => {
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
                    <button className="medicine">Insulin</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights">
                    <button className="back">Back</button>
                </Link>
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageInsightsDiabetesMedications;
