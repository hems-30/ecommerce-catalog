import axios from 'axios';
import { Product } from '../data/productsData'; // <-- corrected path

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};