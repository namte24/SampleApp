import axios from 'axios';

export const fetchItems = async () => {
  try {
    const response = await axios.get('https://api.example.com/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
