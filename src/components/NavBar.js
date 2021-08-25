import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    return(
        <div className="navBar">

            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>

        </div>
    )
}

export default NavBar;