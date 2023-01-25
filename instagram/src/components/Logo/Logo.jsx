import InstagramLogo from '../../assets/Instagram_logo.svg.png';
import React from 'react';

const Logo = ({ style, width, height }) => {
    return (
        <img
            style={style}
            width={width}
            height={height}
            src={InstagramLogo}
            alt="Instagram"
        />
    );
};

export default Logo;
