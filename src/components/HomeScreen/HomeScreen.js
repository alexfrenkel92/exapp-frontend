import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './HomeScreen.css';
import LoginButton from '../LoginButton/LoginButton';

const HomeScreen = () => {

    const { isAuthenticated, user } = useAuth0();
    let pageView;

    if (!isAuthenticated) {
        pageView = (
            <div className='homeScreen'>
                <div>
                    <h1>
                        Please log in to App
                    </h1>
                </div>
                <div>
                   <LoginButton />
                </div>
            </div>
        )
    }

    if (isAuthenticated) {
        pageView = (
            <div className='homeScreen'>
                <h1>Successfully logged in</h1>
                <h3>Welcome back {user.name}</h3>
                <img src={user.picture} alt={user.name} />
                <h3>Check the Products page</h3>
            </div>
        )
    }

    return (
        <div>
            {pageView}
        </div>
    )
}

export default HomeScreen
