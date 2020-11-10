let backendUrl = null;

if (process.env.NODE_ENV === 'development') {
    backendUrl = 'http://localhost:8080'
} else {
    backendUrl = 'https://exapp-backend.herokuapp.com/'
}

export default backendUrl;