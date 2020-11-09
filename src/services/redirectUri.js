let redirectUri = null;

if (process.env.NODE_ENV === 'development') {
    redirectUri = 'http://localhost:3000'
} else {
    redirectUri = 'https://exapp-frontend.herokuapp.com/'
}

export default redirectUri;