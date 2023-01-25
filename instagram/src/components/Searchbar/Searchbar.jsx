import React from 'react';
import './Searchbar.css';
import MagnifyingGlass from '../../assets/search.png';

const Searchbar = ({ searchValue, setSearchValue }) => {
    return (
        <div className="search--container">
            <img
                className="magnifying--glass"
                src={MagnifyingGlass}
                alt="Search"
            />
            <input
                placeholder="Search"
                className="searchbar"
                value={searchValue}
                onChange={(evt) => setSearchValue(evt.target.value)}
            />
        </div>
    );
};

export default Searchbar;
