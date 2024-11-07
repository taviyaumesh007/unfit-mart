// src/App.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import FilterSidebar from './components/FilterSidebar';
import Header from './components/Header';
import { setCategory, setSortOrder } from './redux/slice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // Get filter state from Redux store
  const { selectedCategory, sortOrder,searchTerm  } = useSelector((state) => state.filters);
  // Handle category change
  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  // Handle sort change
  const handleSortChange = (sort) => {
    dispatch(setSortOrder(sort));
  };

  return (
    <div className="app-content">
      <Header />
      <div className="main-content">
        <FilterSidebar
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
          searchTerm={searchTerm}
        />
        <ProductList selectedCategory={selectedCategory} sortOrder={sortOrder} />
      </div>
    </div>
  );
}

export default App;
