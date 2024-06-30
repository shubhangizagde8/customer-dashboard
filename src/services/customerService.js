import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Dummy API URL

export const getCustomers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error.message);
    throw error;
  }
};

export const addCustomer = async (customer) => {
  console.log('Mock add customer:', customer);
};

export const deleteCustomer = async (id) => {
  console.log('Mock delete customer with id:', id);
};

export const updateCustomer = async (customer) => {
  console.log('Mock update customer:', customer);
};
