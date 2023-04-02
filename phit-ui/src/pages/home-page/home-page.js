import './home-page.css'
import {useState} from 'react';
import {useRef} from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    const userInputRef = useRef(null);
    const passInputRef = useRef(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    return (<div className="home-page">
        <div className="home-page-header">
            <div className="home-page-header-text">
                Predictive Healthcare Infrastructure Tool
            </div>
        </div>
        <div className="home-page-body">
            <div className="home-page-logo-wrapper">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Seal_of_the_U.S._Department_of_Veterans_Affairs.svg/900px-Seal_of_the_U.S._Department_of_Veterans_Affairs.svg.png"
                    alt="Department of Veterans Affairs Seal"
                />
            </div>
            <div className="home-page-login-input">
                <div>
                    <label htmlFor="username-input">Username:&emsp;</label>
                    <input
                        ref={userInputRef}
                        type="text"
                        id="Username"
                        name="Username"
                        onChange={handleUserNameChange}
                        value={username}
                    />
                </div>
                <div>
                    <label htmlFor="password-input">Password:&nbsp;&emsp;</label>
                    <input
                        ref={passInputRef}
                        type="password"
                        id="Password"
                        name="Password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </div>
                <div>
                    {(() => {
                        if (username === "system" && password === "admin") {
                            return (<div>
                                <Link to="/systemAdminPage/home">
                                    <button>Login</button>
                                </Link>
                            </div>)
                        } else {
                            return (<div>
                                <button>Login</button>
                            </div>)
                        }
                    })()}
                </div>
            </div>
        </div>
    </div>);
}
export default HomePage;