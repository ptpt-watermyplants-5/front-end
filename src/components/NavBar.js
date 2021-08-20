import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <div className="navBar">

            <Link to="/">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/myplants">My Plants</Link>

        </div>
    )
}

export default NavBar;