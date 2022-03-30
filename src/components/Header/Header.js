import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
             <h1>Welcome to React Routing Test Website!</h1>
             <nav>
                 <CustomLink to="/">Home</CustomLink>

                 <CustomLink to="/Friends">Friends</CustomLink>
                 <CustomLink to="/About">About</CustomLink>
             </nav>
        </div>
    );
};

export default Header;