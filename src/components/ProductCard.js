
import React, { useState } from 'react';
import '../style/ProductCard.css'; // Ensure you have the correct path to your CSS file
import Modal from './Modal'; // Import the Modal component

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle "Add To Cart" button click
  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h4>{product.title}</h4>
        <p className="price">₹{product.price}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal title={product.title} price={product.price} onClose={closeModal} />
      )}
    </div>
  );
}

export default ProductCard;
