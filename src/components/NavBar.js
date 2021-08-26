import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ errors, isValid }) => {

    const mpl = `/myplants/${localStorage.getItem('uid')}`;

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uid')
        document.location.href = '/';
    }

    const handleClick = (e) => {
        errors(null);
    }

    return(
        <div className="navBar">

            <Link to="/">Home</Link>

            <Link to={mpl}>My Plants</Link>
            { isValid ? undefined : <Link to="/signup" onClick={handleClick}>Sign Up</Link> }
            { isValid ? undefined : <span>or</span> }
            { isValid ? undefined : <Link to="/login" onClick={handleClick}>Login</Link> }
            { isValid ? <Link to="/" onClick={handleLogout}>Logout</Link> : undefined }
            { isValid ? <Link to={`${mpl}/plants`}>Add Plant</Link> : undefined }
            { isValid ? <Link to="/" onClick={handleLogout}>Edit User</Link> : undefined }

        </div>
    )
}

export default NavBar;