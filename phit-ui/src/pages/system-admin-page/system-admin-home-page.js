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

                    <div className="row">
                        <div className="column">
                            <div className="detail-text">
                                <img src="https://freesvg.org/img/abstract-user-flat-4.png"></img>
                                <br />
                                <Link to="/medicalAdminPage/supply">&emsp;&emsp;&emsp;Medical Admin</Link>
                            </div>
                            <div className="detail-text">
                                <img src="https://freesvg.org/img/abstract-user-flat-4.png"></img>
                                <br />
                                <span>&emsp;&emsp;&emsp;&emsp;&nbsp;Clinician</span>
                            </div>
                            <div className="detail-text">
                                <img src="https://freesvg.org/img/abstract-user-flat-4.png"></img>
                                <br />
                                <span>&emsp;&emsp;&emsp;Capital Planner</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default SystemAdminHomePage;


