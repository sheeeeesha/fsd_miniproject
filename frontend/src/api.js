// frontend/src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';
const API_URL1 = 'http://localhost:5000/api/events';
const API_URL3 = 'http://localhost:5000/api/search';


// Save search term
export const saveSearchTerm = async (term) => {
    try {
        await axios.post(`${API_URL3}/save-search-term`, { term });
    } catch (error) {
        console.error('Error saving search term:', error);
    }
};

export const fetchSearchTerms = async () => {
    try {
        const response = await axios.get(`${API_URL3}/search-terminologies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching search terms:', error);
        throw error;
    }
};









// User registration
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
};

// User login
export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    return response.data;
};








// Fetch all events
export const fetchAllEvents = async () => {
    const response = await axios.get(API_URL1);
    return response.data;
};

// Fetch event by name
export const fetchEventByName = async (name) => {
    const response = await axios.get(`${API_URL1}/name/${name}`);
    return response.data;
};

// Fetch events by category
export const fetchEventsByCategory = async (categoryId) => {
    const response = await axios.get(`${API_URL1}/category/${categoryId}`);
    return response.data;
};

// Fetch events by rating
export const fetchEventsByRating = async (rating) => {
    const response = await axios.get(`${API_URL1}/rating/${rating}`);
    return response.data;
};

// Fetch events by cost
export const fetchEventsByCost = async (cost) => {
    const response = await axios.get(`${API_URL1}/cost/${cost}`);
    return response.data;
};

// Fetch search results
export const fetchSearchResults = async (searchTerm) => {
    const response = await axios.get(`${API_URL1}/search/${searchTerm}`);
    return response.data;
};

// Add a new event
export const addEvent = async (eventData) => {
    try {
      const response = await axios.post(`${API_URL1}/add-events`, eventData);
      return response.data;
    } catch (error) {
      console.error('Error adding event:', error);
      throw error;
    }
  };