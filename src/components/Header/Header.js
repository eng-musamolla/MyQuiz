import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo.png';

const Header = () => {
    return (
        <nav>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Link to='topics' >Topix</Link>
                <Link to='statistics' >Statistics</Link>
                <Link to='blog' >Blog</Link>
            </div>
        </nav>
    );
};

export default Header;