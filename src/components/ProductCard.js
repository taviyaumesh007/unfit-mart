import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
      <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h4>{product.title}</h4>
        <p className="price">₹{product.price}</p>
        <p className="discount">{product.discount}</p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
