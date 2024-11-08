import React from 'react';
import '../style/ProductCard.css'; // Ensure the CSS file includes styles for the modal

function Modal({ title, price, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Product Details</h3>
        <p>{title}</p>
        <p>Price: ₹{price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
