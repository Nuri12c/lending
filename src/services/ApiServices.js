import axios from 'axios';

export default {
  getProductById: async (id) => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return response.data;
  },

  // Другие функции для работы с API
};

