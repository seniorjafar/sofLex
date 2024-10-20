// src/axiosConfig.js
import axios from 'axios';

// Create an instance of axios
const instance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your actual base URL
});

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    // Get the token from local storage or your state management
    const token = localStorage.getItem('token'); // Adjust based on where you store the token
    if (token) {
      config.headers['Authorization'] = `${token}`; // Attach the token
    }
    return config;
  },
  error => {
    // Handle the request error
    return Promise.reject(error);
  }
);

export default instance;
