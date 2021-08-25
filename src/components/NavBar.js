import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const mpl = `/myplants/${document.location.pathname[10]}`;

    const handleLogout = () => {
        localStorage.removeItem('token');
        document.location.reload();
        window.location.href = '/';
    }

    return(
        <div className="navBar">

            <Link to="/">Home</Link>

            <Link to={mpl}>My Plants</Link>
            { localStorage.getItem('token') ? undefined : <Link to="/signup">Sign Up</Link> }
            { localStorage.getItem('token') ? undefined : <span>or</span> }
            { localStorage.getItem('token') ? undefined : <Link to="/login">Login</Link> }
            { localStorage.getItem('token') ? <Link to="/" onClick={handleLogout}>Logout</Link> : undefined }

        </div>
    )
}

export default NavBar;