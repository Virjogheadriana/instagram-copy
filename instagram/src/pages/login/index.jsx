import LoginLogo from '../../assets/insta-login.png';
import React, { useState } from 'react';
import './index.css';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Login = ({ users, setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const loginUser = (username, password) => {
        if (username === '' || password === '') {
            setError('Missing username or password');
            return;
        }

        const user = users.findIndex((usr) => {
            return usr.username === username && usr.password === password;
        });

        if (user !== -1) {
            setIsAuthenticated(username);
            navigate('/home');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <div className="login-container">
                <div>
                    <img
                        className="login-logo"
                        src={LoginLogo}
                        alt="Instagram"
                    />
                </div>
                <div>
                    <div className={'login-form'}>
                        <Logo
                            style={{
                                height: '50px',
                            }}
                        />
                        <input
                            placeholder="Enter your username"
                            value={username}
                            onChange={(evt) => setUsername(evt.target.value)}
                            type="text"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                        />
                        <Button
                            onClick={() => {
                                loginUser(username, password);
                            }}
                            variant="contained"
                        >
                            Login
                        </Button>
                    </div>
                    {error && <div className="login-error">{error}</div>}
                    <div className="signup">
                        <span>Don't have an account?</span>
                        <span
                            className="signup-button"
                            onClick={() => navigate('/register')}
                        >
                            Sign up here
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
