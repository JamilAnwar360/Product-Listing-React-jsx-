// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import Filters from './components/Filters';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('API_URL'); // Replace with your API endpoint
      const data = await response.json();
      setProducts(data.products); // Adjust according to your data structure
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Filters />
      <ProductListing products={products} />
    </div>
  );
};

export default App;
