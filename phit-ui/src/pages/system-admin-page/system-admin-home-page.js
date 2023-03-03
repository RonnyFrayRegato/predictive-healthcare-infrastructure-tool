import './system-admin-home-page.css'
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SystemAdminHomePage = () => {

    return (
        <div className="system-admin-home">
            <div className="system-admin-home-header">
                <div className="system-admin-home-header-text">
                    PHIT
                </div>
            </div>
            <div className="system-admin-home-column">
                <div className="system-admin-home-column-text">

                    <div className="system-admin-home-highlighted-text">&emsp;User Types</div>
                    <hr></hr>


                </div>
                <div className="system-admin-home-exit-text">
                    <hr></hr>
                    <Link to="/">
                        &ensp;Exit
                    </Link>

                </div>
            </div>
            <div className="system-admin-home-body">
                <div className="page-title">
                Access Control
                    </div>
                <div className="system-admin-home-profile-wrapper">
                    
                    <img src="https://freesvg.org/img/abstract-user-flat-4.png" height="300"></img>&emsp;&emsp;
                    <img src="https://freesvg.org/img/abstract-user-flat-4.png" height="300"></img>&emsp;&emsp;
                    <img src="https://freesvg.org/img/abstract-user-flat-4.png" height="300"></img>&emsp;&emsp;

                </div>

            </div>
            <div className= "profile-text">
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                <Link to="/medicalAdminPage/supply">Medical Admin</Link>
                &ensp;&emsp;&emsp;&emsp;&emsp;
                Clinician
                &emsp;&emsp;&emsp;&emsp;
                Capital Planner
               
            </div>

        </div>
    );
}

export default SystemAdminHomePage;


