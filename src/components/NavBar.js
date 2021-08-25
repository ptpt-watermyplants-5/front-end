import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, isValid }) => {

    const mpl = `/myplants/${document.location.pathname[10]}`;

    const handleLogout = () => {
        localStorage.removeItem('token');
        loggedIn(false)
        window.location.href = '/';
    }
console.log(isValid)
    return(
        <div className="navBar">

            <Link to="/">Home</Link>

            <Link to={mpl}>My Plants</Link>
            { isValid ? undefined : <Link to="/signup">Sign Up</Link> }
            { isValid ? undefined : <span>or</span> }
            { isValid ? undefined : <Link to="/login">Login</Link> }
            { isValid ? <Link to="/" onClick={handleLogout}>Logout</Link> : undefined }

        </div>
    )
}

export default NavBar;