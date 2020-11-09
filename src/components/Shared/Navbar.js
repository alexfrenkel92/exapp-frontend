import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import classes from '../../App.module.css';

const Navbar = () => {
    const history = useHistory();
    const { isAuthenticated, logout } = useAuth0();
    console.log(isAuthenticated)

    function navigateToHomePage() {
        history.push('/');
    }
    function navigatoToProducts() {
        history.push('/products');
    }

    let navbarView;
    if (!isAuthenticated) {
        navbarView = (
            <div className={classes.pTag}>
                <p onClick={navigatoToProducts}>Products</p>
            </div>
        )
    } else if (isAuthenticated) {
        navbarView = (
            <div className={classes.pTag}>
                <p onClick={logout}>Logout</p>
                <p onClick={navigatoToProducts}>Products</p>
            </div>
        )
    }

    return (
        <>
            <div>
                <p className={classes.brandName} onClick={navigateToHomePage}>Ex App</p>
            </div>
            {navbarView}
        </>
    )
}

export default Navbar
