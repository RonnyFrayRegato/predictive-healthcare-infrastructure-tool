import "./static-data-page.css"
import {Link} from "react-router-dom";
import React from "react"

const MedicalAdminPageMedications = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/medications/0/100")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (<div className="medical-admin">
        <div className="medical-admin-header">
            <div className="medical-admin-header-text">
                PHIT
            </div>
        </div>
        <div className="medical-admin-column">
            <div className="medical-admin-column-text">
                <Link to="/medicalAdminPage/supply">&emsp;Supply</Link>
                <hr></hr>
                <Link to="/medicalAdminPage/patients">&emsp;Patients</Link>
                <hr></hr>
                <div className="medical-admin-highlighted-text">&emsp;Medications</div>
                <hr></hr>
                <Link to="/medicalAdminPage/allergies">&emsp;Allergies</Link>
                <hr></hr>
                <Link to="/medicalAdminPage/insights">&emsp;Insights</Link>
                <hr></hr>
                <br/>
            </div>
            <div className="medical-admin-exit-text">
                <Link to="/systemAdminPage/home">
                    &ensp;Back
                </Link>
                <hr></hr>
                <Link to="/">
                    &ensp;Exit
                </Link>
            </div>
        </div>
        <div>
            <div className="medical-admin-table-top-spacer">
                Medications
            </div>
            <div className="medical-admin-table-wrapper">
                {(() => {
                    if (!data) {
                        return (<div>
                            <span className="table-loading">Loading...</span>
                        </div>)
                    } else {
                        return (<table>
                            <tr>
                                <th>ID</th>
                                <th>Years Old</th>
                                <th>Code</th>
                                <th>Description</th>
                                <th>Dispenses</th>
                            </tr>
                            {data.map((arr, index) => (<tr key={index}>
                                {arr.map(num => (<td key={num}>{num}</td>))}
                            </tr>))}
                        </table>)
                    }
                })()}
            </div>
            <div className="medical-admin--table-bottom-spacer">
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageMedications;
