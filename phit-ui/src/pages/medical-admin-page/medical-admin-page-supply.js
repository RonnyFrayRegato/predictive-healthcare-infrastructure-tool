import './medical-admin-page-supply.css'
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import React from "react"

const MedicalAdminPageSupply = () => {

    

    const [data, setData] = React.useState(null);

    React.useEffect(() =>{
        fetch("/supply")
        .then((res) => res.json())
        .then((data) => setData(data.message));
      }, []);


    return (
        <div className="medical-admin-supply">
            <div className="medical-admin-supply-header">
                <div className="medical-admin-supply-header-text">
                    PHIT
                </div>
            </div>
            <div className="medical-admin-supply-column">
                <div className="medical-admin-supply-column-text">

                    <div className="medical-admin-supply-highlighted-text">&emsp;Supply</div>
                    <hr></hr>
                    <Link to ="/medicalAdminPage/patients">&emsp;Patients</Link>
                    <hr></hr>
                    <Link to ="/medicalAdminPage/medications">&emsp;Medications</Link>
                    <hr></hr>
                    <Link to="/medicalAdminPage/allergies">&emsp;Allergies</Link>
                    <hr></hr>
                    <br/>


                </div>
                <div className="medical-admin-supply-exit-text">
                    <Link to="/systemAdminPage/home">
                        &ensp;Back
                    </Link>
                    <hr></hr>

                    <Link to="/">
                        &ensp;Exit
                    </Link>

                </div>
            </div>
            <div className="medical-admin-supply-body">
                <div className="medical-admin-supply-table-top-spacer">

                    Supply

                </div>
                <div className="medical-admin-supply-table-wrapper">
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
                <div className="medical-admin-supply-table-bottom-spacer">
                    </div>
            </div>
        </div>
    );
}

export default MedicalAdminPageSupply;


