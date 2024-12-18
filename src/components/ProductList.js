import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import Loader from './Loader';

function ProductList() {
  const { selectedCategory, sortOrder, searchTerm } = useSelector((state) => state.filters);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => {
      const productCategory = product.category.trim().toLowerCase();
      const selectedCategoryNormalized = selectedCategory.trim().toLowerCase();
      return productCategory === selectedCategoryNormalized;
    });

  // Further filter by search term (product title)
  const searchFilteredProducts = filteredProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Sort products by price
  const sortedProducts = searchFilteredProducts.sort((a, b) => {
    if (sortOrder === 'low-to-high') {
      return a.price - b.price;
    } else if (sortOrder === 'high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  if (loading) return <Loader/>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ width: '85%', padding:'1rem'}}>
      <div className="list-header">
        <h2 className="category-title">Multivitamins</h2>
        <select className="sort-dropdown">
          <option value="featured">Featured</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
