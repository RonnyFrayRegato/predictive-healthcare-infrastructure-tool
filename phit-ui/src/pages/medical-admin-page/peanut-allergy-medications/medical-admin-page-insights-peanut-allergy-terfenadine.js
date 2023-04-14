import "../insights-page.css"
import {Link} from "react-router-dom";
import React from "react"

const MedicalAdminPageInsightsPeanutAllergyTerfenadine = () => {
     const [data, setData] = React.useState(null);
      React.useEffect(() => {
         fetch("/terfenadinePeanut")
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
                Terfenadine Predictions
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
                <Link to="/medicalAdminPage/insights/peanutAllergy-medications">
                    <button className="back">Back</button>
                </Link>
                <Link to="/medicalAdminPage/insights/peanutAllergy">
                    <button className="selection">Patients</button>
                </Link>
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageInsightsPeanutAllergyTerfenadine;
