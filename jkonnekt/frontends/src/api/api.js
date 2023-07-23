import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

export const fetchEventOwners = async () => {
  try {
    const response = await axios.get(`${BASE_URL}event-owners/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event owners:', error);
    throw error;
  }
};

export const fetchEventOwner = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}event-owners/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event owner:', error);
    throw error;
  }
};

export const createEventOwner = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}event-owners/`, formData);
    return response.data;
  } catch (error) {
    console.error('Error creating event owner:', error);
    throw error;
  }
};

export const fetchEventVendors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}event-vendors/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event vendors:', error);
    throw error;
  }
};

export const fetchEventVendor = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}event-vendors/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event vendor:', error);
    throw error;
  }
};

export const createEventVendor = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}event-vendors/`, formData);
    return response.data;
  } catch (error) {
    console.error('Error creating event vendor:', error);
    throw error;
  }
};

export const fetchRooms = async () => {
  try {
    const response = await axios.get(`${BASE_URL}rooms/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const fetchRoom = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}rooms/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
};

export const createRoom = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}rooms/`, formData);
    return response.data;
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
};
