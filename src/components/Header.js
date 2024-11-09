import React from 'react';

function Header() {
  const showSidebar = () => {
    const sidebar = document.querySelector('.filter-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('show');
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <header className="header">
      <span className='hamburger' onClick={showSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </span>
        <h1>MY STORE</h1>
      </header>
    </div>
  );
}

export default Header;