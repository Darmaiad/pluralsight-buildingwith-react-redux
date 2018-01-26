import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
// const Header = ({ loading }) => {
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
