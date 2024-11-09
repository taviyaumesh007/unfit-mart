import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setSortOrder, setSearchTerm } from '../redux/slice';
import RatingFilter from './RatingFilter';

function FilterSidebar() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTermLocal] = useState(''); // Local state for search input

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTermLocal(value); // Update local input state
    dispatch(setSearchTerm(value)); // Dispatch action to update global search product in Redux store
  };
  const hideSidebar = () => {
    const sidebar = document.querySelector('.filter-sidebar');
    if (sidebar) {
      sidebar.classList.remove('show'); // Remove the 'show' class
    }
  }

  return (
    <aside className="filter-sidebar">
      <div>
        <button className="close-button" onClick={hideSidebar}>
          close
        </button>
      </div>
      {/* <div>
        <input
          className='sort-search'
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div> */}
      <h3>Category</h3>
      <ul>
        <li onClick={() => dispatch(setCategory('All'))}>All</li>
        <li onClick={() => dispatch(setCategory("Men's Clothing"))}>Men's Clothing</li>
        <li onClick={() => dispatch(setCategory("Women's Clothing"))}>Women's Clothing</li>
        <li onClick={() => dispatch(setCategory('jewelery'))}>Jewelry</li>
        <li onClick={() => dispatch(setCategory('Electronics'))}>Electronics</li>
        <a style={{ color: "#EC4E1E" }} href=''>See all</a>
      </ul>

      {/* Price Sort */}
      <h3>Price</h3>
      <ul>
        <li onClick={() => dispatch(setSortOrder('low-to-high'))}>Low to High</li>
        <li onClick={() => dispatch(setSortOrder('high-to-low'))}>High to Low</li>
        <a style={{ color: "#EC4E1E" }} href=''>See all</a>
      </ul>
      <RatingFilter />
    </aside>
  );
}

export default FilterSidebar;
