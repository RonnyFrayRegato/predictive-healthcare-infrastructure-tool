import './medical-admin-page-allergies.css'
import {useState} from 'react';
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import React from "react"

const MedicalAdminPageAllergies = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/allergies")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (<div className="medical-admin-allergies">
        <div className="medical-admin-allergies-header">
            <div className="medical-admin-allergies-header-text">
                PHIT
            </div>
        </div>
        <div className="medical-admin-allergies-column">
            <div className="medical-admin-allergies-column-text">
                <Link to="/medicalAdminPage/supply">&emsp;Supply</Link>
                <hr></hr>
                <Link to="/medicalAdminPage/patients">&emsp;Patients</Link>
                <hr></hr>
                <Link to="/medicalAdminPage/medications">&emsp;Medications</Link>
                <hr></hr>
                <div className="medical-admin-allergies-highlighted-text">&emsp;Allergies</div>
                <hr></hr>
                <br/>
            </div>
            <div className="medical-admin-allergies-exit-text">
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
            <div className="medical-admin-allergies-table-top-spacer">
                Allergies
            </div>
            <div className="medical-admin-allergies-table-wrapper">
                {(() => {
                    if (!data) {
                        return (<div>
                            <span className="table-loading">Loading...</span>
                        </div>)
                    } else {
                        return (<table>
                            <tr>
                                <th>Date</th>
                                <th>Patient Name</th>
                                <th>Birth Date</th>
                                <th>Age</th>
                                <th>Description</th>
                                <th>Quantity</th>
                            </tr>
                            {data.map((arr, index) => (<tr key={index}>
                                {arr.map(num => (<td key={num}>{num}</td>))}
                            </tr>))}
                        </table>)
                    }
                })()}
            </div>
            <div className="medical-admin-allergies-table-bottom-spacer">
            </div>
        </div>
    </div>);
}
export default MedicalAdminPageAllergies;