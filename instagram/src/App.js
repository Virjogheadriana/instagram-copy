import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import React, { useState, useEffect } from 'react';
import Profile from './pages/profile';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState('');
    const [users, setUsers] = useState([]);
    const [appData, setAppData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let instagramUsers;
            let instagramPosts;
            let offset = 0;
            await fetch('https://dummyjson.com/users').then((res) =>
                res.json().then((r) => (instagramUsers = r.users))
            );
            await fetch('https://dummyjson.com/posts?limit=150').then((res) =>
                res.json().then((r) => (instagramPosts = r.posts))
            );

            let newAppData = instagramUsers.map((user) => {
                let newUserData = {
                    ...user,
                    posts: [...instagramPosts].slice(offset, offset + 5),
                };
                offset = offset + 5;
                return newUserData;
            });

            setAppData(newAppData);
        };
        getData();
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <Login
                                users={users}
                                setIsAuthenticated={setIsAuthenticated}
                            />
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Register
                                setUsers={setUsers}
                                setIsAuthenticated={setIsAuthenticated}
                            />
                        }
                    />
                    {isAuthenticated !== '' ? (
                        <>
                            <Route
                                exact
                                path="/home"
                                element={
                                    <Home
                                        appData={appData}
                                        setUsers={setUsers}
                                        users={users}
                                        authenticatedUser={isAuthenticated}
                                        setIsAuthenticated={setIsAuthenticated}
                                    />
                                }
                            />
                            <Route
                                exact
                                path="/profile"
                                element={
                                    <Profile
                                        setIsAuthenticated={setIsAuthenticated}
                                        user={users.find(
                                            (user) =>
                                                user.username ===
                                                isAuthenticated
                                        )}
                                    />
                                }
                            />
                        </>
                    ) : (
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    )}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
