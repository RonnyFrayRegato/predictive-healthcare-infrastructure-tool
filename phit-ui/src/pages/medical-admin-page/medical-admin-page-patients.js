import './medical-admin-page-patients.css'
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import React from "react"

const MedicalAdminPagePatients = () => {

    const [data, setData] = React.useState(null);

    React.useEffect(() =>{
        fetch("/patients/0/100")
        .then((res) => res.json())
        .then((data) => setData(data.message));
      }, []);

    return (
        <div className="medical-admin-patients">
            <div className="medical-admin-patients-header">
                <div className="medical-admin-patients-header-text">
                    PHIT
                </div>
            </div>
            <div className="medical-admin-patients-column">
                <div className="medical-admin-patients-column-text">

                    <Link to="/medicalAdminPage/supply">&emsp;Supply</Link>
                    <hr></hr>
                    <div className="medical-admin-patients-highlighted-text">&emsp;Patients</div>
                    <hr></hr>
                    <Link to="/medicalAdminPage/carePlans">&emsp;Care Plans</Link>
                    <hr></hr>
                    <Link to="/medicalAdminPage/allergies">&emsp;Allergies</Link>

                </div>
                <div className="medical-admin-patients-exit-text">
                    <Link to="/systemAdminPage/home">
                        &ensp;Back
                    </Link>
                    <hr></hr>

                    <Link to="/">
                        &ensp;Exit
                    </Link>

                </div>
            </div>
            <div className="medical-admin-patients-body">
                <div className="medical-admin-patients-table-top-spacer">

                    Patients

                </div>
                <div className="medical-admin-patients-table-wrapper">

                {(() => {
                            if (!data) {
                                return (
                                    <div>

                                        Loading...

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
                <div className="medical-admin-patients-table-bottom-spacer">
                    </div>
            </div>
        </div>
    );
}

export default MedicalAdminPagePatients;


