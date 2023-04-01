import './home-page.css'
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const userInputRef = useRef(null);
    const passInputRef = useRef(null);

    const [Username, setUser] = useState('');
    const [Password, setPass] = useState('');

    const handleUserNameChange = event => {
        setUser(event.target.value);
    };

    const handlePasswordChange = event => {
        setPass(event.target.value);
    };

    return (
        <div className="home-page">
            <div className="home-page-header">
                <div className="home-page-header-text">

                    Predictive Healthcare Infrastructure Tool

                </div>
            </div>
            <div className="home-page-body">
                <div className="home-page-logo-wrapper">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Seal_of_the_U.S._Department_of_Veterans_Affairs.svg/900px-Seal_of_the_U.S._Department_of_Veterans_Affairs.svg.png"></img>

                </div>
                <div className="home-page-login-input">
                    <div>

                        Username:&emsp;
                        <input ref={userInputRef} type="text" id="Username" name="Username" onChange={handleUserNameChange} value={Username}/>

                    </div>
                    <div>

                        Password:&nbsp;&emsp;
                        <input ref={passInputRef} type="text" id="Password" name="Password" onChange={handlePasswordChange} value={Password} />

                    </div>
                    <div>

                        {(() => {
                            if (Username == "system" && Password == "admin") {
                                return (
                                    <div>

                                        <Link to="/systemAdminPage/home">
                                            <button >Login</button>
                                        </Link>

                                    </div>
                                )
                            } else {
                                return (
                                    <div>

                                        <button >Login</button>

                                    </div>
                                )
                            }
                        })()}

                        <h2>Default Username: "system"</h2>
                        <h2>Default Password: "admin"</h2>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;


