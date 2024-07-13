import axios from 'axios';

// Create an Axios instance with a default authorization header
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Set your base URL
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Get the token from local storage
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
