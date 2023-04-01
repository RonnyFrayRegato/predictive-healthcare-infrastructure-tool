import './medical-admin-page-medications.css'
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import React from "react"

const MedicalAdminPageMedications = () => {

    const [data, setData] = React.useState(null);

    React.useEffect(() =>{
        fetch("/medications/0/100")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="medical-admin-medications">
            <div className="medical-admin-medications-header">
                <div className="medical-admin-medications-header-text">
                    PHIT
                </div>
            </div>
            <div className="medical-admin-medications-column">
                <div className="medical-admin-medications-column-text">

                    <Link to="/medicalAdminPage/supply">&emsp;Supply</Link>
                    <hr></hr>
                    <Link to ="/medicalAdminPage/patients">&emsp;Patients</Link>
                    <hr></hr>
                    <div className="medical-admin-medications-highlighted-text">&emsp;Medications</div>
                    <hr></hr>
                    <Link to="/medicalAdminPage/allergies">&emsp;Allergies</Link>
                    <hr></hr>
                    <br/>


                </div>
                <div className="medical-admin-medications-exit-text">
                    <Link to="/systemAdminPage/home">
                        &ensp;Back
                    </Link>
                    <hr></hr>

                    <Link to="/">
                        &ensp;Exit
                    </Link>

                </div>
            </div>
            <div className="medical-admin-medications-body">
                <div className="medical-admin-medications-table-top-spacer">

                    Medications

                </div>
                <div className="medical-admin-medications-table-wrapper">

                    {(() => {
                        if (!data) {
                            return (
                                <div>

                                    <span className="table-loading">Loading...</span>

                                </div>
                            )
                        } else {
                            return (
                                <table>
                                    <tr>
                                        <th>Date</th>
                                        <th>Patient Name</th>
                                        <th>Birth Date</th>
                                        <th>Age</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                    </tr>
                                    {data.map((arr, index) => (
                                        <tr key={index}>
                                            {arr.map(num => (
                                                <td key={num}>{num}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </table>
                            )
                        }
                    })()}

                </div>
                <div className="medical-admin-medications-table-bottom-spacer">
                </div>
            </div>
        </div>
    );
}

export default MedicalAdminPageMedications;


