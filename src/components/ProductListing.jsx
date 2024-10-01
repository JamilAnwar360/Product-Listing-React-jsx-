// src/components/ProductListing.js
import React from 'react';
import ProductCard from './ProductCard';
import styles from './styles/ProductListing.module.css';

const ProductListing = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
