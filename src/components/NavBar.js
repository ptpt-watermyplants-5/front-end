import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = ({ loggedIn, isValid, uid, setuid, errors }) => {

    const mpl = `/myplants/${uid}`;
    const { push } = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setuid(null)
        loggedIn(false)
        push('/');
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

        </div>
    )
}

export default NavBar;