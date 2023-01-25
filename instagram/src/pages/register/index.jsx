import React, { useState } from 'react';
import './index.css';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Register = ({ setUsers, setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const createUser = (email, username, fullname, password) => {
        if (!email || !username || !fullname || !password) {
            setError('All fields are mandatory');
            return;
        }

        setUsers((prevState) => [
            ...prevState,
            {
                email: email,
                username: username,
                fullname: fullname,
                password: password,
                following: [],
            },
        ]);

        setIsAuthenticated(username);
        navigate('/home');
    };

    return (
        <div className="registration-container">
            <div className="register-form">
                <Logo height="70px" />
                <span className="register-info">
                    Sign up to see photos and videos from your friends.
                </span>
                <input
                    type="email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    placeholder="E-mail"
                />
                <input
                    type="text"
                    value={fullname}
                    onChange={(evt) => setFullname(evt.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    value={username}
                    onChange={(evt) => setUsername(evt.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    placeholder="Password"
                />
                <span className="register-info">
                    By signing up, you agree to our Terms. Learn how we collect,
                    use and share your data in our Privacy Policy and how we use
                    cookies and similar technology in our Cookies Policy.
                </span>
                <Button
                    variant="contained"
                    onClick={() => {
                        createUser(email, username, fullname, password);
                    }}
                >
                    Register
                </Button>
            </div>
            {error && <div className="login-error">{error}</div>}
            <div className="already-registerd">
                <span>Already have an account?</span>
                <span onClick={() => navigate('/login')}>Login</span>
            </div>
        </div>
    );
};

export default Register;
