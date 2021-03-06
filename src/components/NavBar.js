import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = (props) => {
    const { errors, isValid, user, loggedIn } = props;

    const { push } = useHistory();

    const mpl = `/myplants/${localStorage.getItem('uid')}`;
    const ul = `/user/${localStorage.getItem('uid')}`;

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        loggedIn(false);
        push('/');
    }

    const handleClick = (e) => {
        errors(null);
    }

    return(
        <div className="navBar">
            <div>
            <Link to="/">Home</Link>
            <Link to={mpl}>My Plants</Link>
            </div>
            <div>
            { isValid ? <Link to={`${mpl}/plants`}>Add Plant</Link> : undefined }
            { isValid ? <span id='AE'>||</span> : undefined }
            { isValid ? <Link to={`${ul}`}>Edit User</Link> : undefined }
            </div>
            <div className="navBar-right">
            { isValid ? undefined : <Link to="/signup" onClick={handleClick}>Sign Up</Link> }
            { isValid ? undefined : <span>or</span> }
            { isValid ? undefined : <Link to="/login" onClick={handleClick}>Login</Link> }
            { isValid ? <span style={{'padding':'0 2rem 0 0'}}>username: {user}</span> : undefined }
            { isValid ? <Link to="/" onClick={handleLogout}>Logout</Link> : undefined }
            </div>


        </div>
    )
}

export default NavBar;