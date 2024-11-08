import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  selectedCategory: 'All', // Default to 'All'
  sortOrder: 'low-to-high', // Default sorting: Low to High
  searchTerm: '', // Add a new state for search term
};

// Create slice (reducer and actions)
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; 
    },
  },
});

// Export actions to dispatch
export const { setCategory, setSortOrder, setSearchTerm } = filterSlice.actions;

export default filterSlice.reducer;
