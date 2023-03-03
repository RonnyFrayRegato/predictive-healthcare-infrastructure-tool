import './medical-admin-page-care-plans.css'
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import React from "react"

const MedicalAdminPageCarePlans = () => {

    const [data, setData] = React.useState(null);

    React.useEffect(() =>{
        fetch("/carePlans")
        .then((res) => res.json())
        .then((data) => setData(data.message));
      }, []);

    return (
        <div className="medical-admin-care-plans">
            <div className="medical-admin-care-plans-header">
                <div className="medical-admin-care-plans-header-text">
                    PHIT
                </div>
            </div>
            <div className="medical-admin-care-plans-column">
                <div className="medical-admin-care-plans-column-text">

                    <Link to="/medicalAdminPage/supply">&emsp;Supply</Link>
                    <hr></hr>
                    <Link to="/medicalAdminPage/patients">&emsp;Patients</Link>
                    <hr></hr>
                    <div className="medical-admin-care-plans-highlighted-text">&emsp;Care Plans</div>
                    <hr></hr>
                    <Link to="/medicalAdminPage/allergies">&emsp;Allergies</Link>

                </div>
                <div className="medical-admin-care-plans-exit-text">
                    <Link to="/systemAdminPage/home">
                        &ensp;Back
                    </Link>
                    <hr></hr>

                    <Link to="/">
                        &ensp;Exit
                    </Link>

                </div>
            </div>
            <div className="medical-admin-care-plans-body">
                <div className="medical-admin-care-plans-table-top-spacer">

                    Care Plans

                </div>
                <div className="medical-admin-care-plans-table-wrapper">

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
                <div className="medical-admin-care-plans-table-bottom-spacer">
                    </div>
            </div>
        </div>
    );
}

export default MedicalAdminPageCarePlans;


