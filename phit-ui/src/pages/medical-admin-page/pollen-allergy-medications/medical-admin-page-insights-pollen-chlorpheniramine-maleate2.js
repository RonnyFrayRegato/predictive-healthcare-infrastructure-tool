import "../insights-page.css"
import {Link} from "react-router-dom";
import React from "react"

const MedicalAdminPageInsightsPollenChlorpheniramineMaleate2 = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/chlorpheniramineTwoPollen")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (<div className="medical-admin">
        <div className="medical-admin-header">
            <div className="medical-admin-header-text">
                PHIT
            </div>
        </div>
        <div>
            <div className="medical-admin-insights-title">
                Chlorpheniramine Maleate 2 MG/ML Predictions
            </div>
            <div className="medical-admin-table-wrapper">
                {(() => {
                    if (!data) {
                        return (<div>
                            <span className="table-loading">Loading...</span>
                        </div>)
                    } else {
                        return (<table className="insights">
                            <tr>
                                <th>Year</th>
                                <th>Number of Medications</th>
                            </tr>
                            {data.map((arr, index) => (<tr key={index}>
                                {arr.map(num => (<td key={num}>{num}</td>))}
                            </tr>))}
                        </table>)
                    }
                })()}
            </div>
            <div className="row">
                <Link to="/medicalAdminPage/insights/pollen-medications">
                    <button className="back">Back</button>
                </Link>
                <Link to="/medicalAdminPage/insights/pollen">
                    <button className="selection">Patients</button>
                </Link>
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageInsightsPollenChlorpheniramineMaleate2;
