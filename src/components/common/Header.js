import React from 'react';
import { NavLink } from 'react-router-dom';

// Exact parameter in NavLink is needed in order for activeClassName to work correctly
const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink exact to="/about" activeClassName="active">About</NavLink>
            {" | "}
            <NavLink exact to="/courses" activeClassName="active">Courses</NavLink>
        </nav>
    );
};

export default Header;
