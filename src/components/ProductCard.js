import React, { useState } from 'react';
import '../style/ProductCard.css';
import Modal from './Modal';

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <div>
        <div className="discount-badge">
          20% Off
        </div>
        <div className="favorit-badge"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
        </svg></div>
      </div>

      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h4 className="product-title">{product.title}</h4>
        <div className="price-section">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">5₹{product.originalPrice}</span>
          <span className="discount-percent">(1% off)</span>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <span style={{ padding: "5px" }}>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.68421 0H12.3158C15.4551 0 18 2.54491 18 5.68421V12.3158C18 15.4551 15.4551 18 12.3158 18H5.68421C2.54491 18 0 15.4551 0 12.3158V5.68421C0 2.54491 2.54491 0 5.68421 0ZM12.3158 16.5789C14.6681 16.5737 16.5737 14.6681 16.5789 12.3158V5.68421C16.5737 3.33189 14.6681 1.42626 12.3158 1.42105H5.68421C3.33189 1.42626 1.42626 3.33189 1.42105 5.68421V12.3158C1.42626 14.6681 3.33189 16.5737 5.68421 16.5789H12.3158Z" fill="white" />
              <path d="M12.0126 4.26316C11.6224 4.26826 11.3072 4.5834 11.3021 4.97368C11.2922 5.57172 11.0431 6.14087 10.6105 6.5539C10.1779 6.96693 9.59785 7.1894 9 7.17158C7.76858 7.20881 6.73909 6.24287 6.69789 5.01158C6.69789 4.61917 6.37978 4.30105 5.98737 4.30105C5.59496 4.30105 5.27684 4.61917 5.27684 5.01158C5.31829 7.02761 6.98388 8.62963 9 8.59263C11.0161 8.62963 12.6817 7.02761 12.7232 5.01158C12.7336 4.81666 12.6633 4.62604 12.5289 4.48448C12.3945 4.34292 12.2078 4.26288 12.0126 4.26316Z" fill="white" />
            </svg>
          </span>
          <span>

            Add To Cart
          </span>
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
