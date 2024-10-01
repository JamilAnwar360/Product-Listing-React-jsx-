// src/components/Filters.js
import React from 'react';
import styles from './styles/Filters.module.css';

const Filters = ({ setFilter }) => {
  return (
    <div className={styles.filters}>
      {/* Add filters for categories, price ranges, etc. */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Products</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select>
      <input type="text" placeholder="Search Products" />
    </div>
  );
};

export default Filters;
