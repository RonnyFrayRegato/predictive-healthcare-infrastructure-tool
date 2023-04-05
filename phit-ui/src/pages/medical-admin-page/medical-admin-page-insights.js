import './insights-page.css'
import {Link} from 'react-router-dom';
import React from "react"

const MedicalAdminPageInsights = () => {
    return (<div className="medical-admin">
        <div className="medical-admin-header">
            <div className="medical-admin-header-text">
                PHIT
            </div>
        </div>
        <div>
            <div className="medical-admin-insights-title">
                Insights
            </div>
            <div className="row">
                <Link to="/medicalAdminPage/insights/peanutAllergy">
                    <button className="insights">Peanut Allergy</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/diabetes">
                    <button className="insights">Diabetes</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/insights/hypertension">
                    <button className="insights">Hypertension</button>
                </Link>
                <br/>
                <Link to="/medicalAdminPage/supply">
                    <button className="back">Back</button>
                </Link>
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageInsights;
