import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;       // ✅ keep "title" (not "name") to match productsData
  price: number;
  description?: string;
  image: string;
  category: string;
  subCategory?: string;
}

interface ProductsState {
  items: Product[];
  selectedCategory: string;
  selectedSubCategory: string | null;
  searchQuery: string;
  sortOrder: 'asc' | 'desc' | null;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: ProductsState = {
  items: [],
  selectedCategory: 'all',
  selectedSubCategory: null,
  searchQuery: '',
  sortOrder: null,
  currentPage: 1,
  itemsPerPage: 8,
};
const resetPage = (state: ProductsState) => { state.currentPage = 1 };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.selectedSubCategory = null;
      resetPage(state);
    },
    setSubCategory: (state, action: PayloadAction<string>) => {
      state.selectedSubCategory = action.payload;
      resetPage(state);
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc' | null>) => {
      state.sortOrder = action.payload;
      resetPage(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      resetPage(state);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      resetPage(state);
    },
    clearFilters: (state) => {
      state.selectedCategory = 'all';
      state.selectedSubCategory = null;
      state.searchQuery = '';
      state.sortOrder = null;
      resetPage(state);
    },
  },
});

export const {
  setProducts,
  setCategory,
  setSubCategory,
  setSortOrder,
  setCurrentPage,
  setItemsPerPage,
  setSearchQuery,
  clearFilters,
} = productsSlice.actions;

export default productsSlice.reducer;