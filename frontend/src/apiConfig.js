const API_BASE_URL = process.env.REACT_APP_API_URL || (['localhost', '127.0.0.1'].includes(window.location.hostname) ? 'http://localhost:5000' : 'https://braintone-six.vercel.app');

export default API_BASE_URL;
