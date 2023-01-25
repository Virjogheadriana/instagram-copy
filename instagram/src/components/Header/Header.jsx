// Import libraries
import React, { useEffect } from 'react';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';

// Import CSS files
import './Header.css';

import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header = ({ setIsAuthenticated, searchValue, setSearchValue }) => {
    const navigate = useNavigate();
    return (
        <div className="header--container">
            <Logo height="30px" />
            <Searchbar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div>
                <HomeIcon
                    onClick={() => navigate('/home')}
                    sx={{ cursor: 'pointer' }}
                />
                <AccountBoxIcon
                    onClick={() => navigate('/profile')}
                    sx={{ cursor: 'pointer' }}
                />
                <LogoutIcon
                    onClick={() => {
                        setIsAuthenticated('');
                        navigate('/login');
                    }}
                    sx={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    );
};

export default Header;
