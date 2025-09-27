import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Category =
  | 'All'
  | 'Women'
  | 'Men'
  | 'Electronics'
  | 'Beauty & Health'
  | 'Sports & Outdoors'
  | 'Jewelry & Watches'
  | 'Bags & Luggage'
  | 'Sale / Offers';

export type SubCategory =
  | 'All'
  | 'Traditional Clothes'
  | 'Casual Wear'
  | 'Formal'
  | 'Accessories'
  | 'Others'
  | 'Smartphones'
  | 'Laptops & Computers'
  | 'Headphones'
  | 'Makeup'
  | 'Skincare'
  | 'Haircare'
  | 'Supplements'
  | 'Gym'
  | 'Outdoor'
  | 'Cycling'
  | 'Fitness'
  | 'Rings'
  | 'Necklaces'
  | 'Watches'
  | 'Backpacks'
  | 'Handbags'
  | 'Suitcases'
  | 'Discounts'
  | 'Bracelets';

interface CategoriesState {
  selectedMainCategory: Category | null;
  selectedSubCategory: SubCategory | null;
}

const initialState: CategoriesState = {
  selectedMainCategory: null,
  selectedSubCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setMainCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedMainCategory = action.payload;
      state.selectedSubCategory = null;
    },
    setSubCategory: (state, action: PayloadAction<SubCategory | null>) => {
      state.selectedSubCategory = action.payload;
    },
  },
});

export const { setMainCategory, setSubCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;