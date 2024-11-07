import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setSortOrder, setSearchTerm } from '../redux/slice';

function FilterSidebar() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTermLocal] = useState(''); // Local state for search input

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTermLocal(value); // Update local input state
    dispatch(setSearchTerm(value)); // Dispatch action to update global search product in Redux store
  };

  return (
    <aside className="filter-sidebar">
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <h3>Category</h3>
      <ul>
        <li onClick={() => dispatch(setCategory('All'))}>All</li>
        <li onClick={() => dispatch(setCategory("Men's Clothing"))}>Men's Clothing</li>
        <li onClick={() => dispatch(setCategory("Women's Clothing"))}>Women's Clothing</li>
        <li onClick={() => dispatch(setCategory('jewelery'))}>Jewelry</li>
        <li onClick={() => dispatch(setCategory('Electronics'))}>Electronics</li>
      </ul>

      {/* Price Sort */}
      <h3>Price</h3>
      <ul>
        <li onClick={() => dispatch(setSortOrder('low-to-high'))}>Low to High</li>
        <li onClick={() => dispatch(setSortOrder('high-to-low'))}>High to Low</li>
      </ul>
    </aside>
  );
}

export default FilterSidebar;
