// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 15px;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {/* Add a button for adding to cart or viewing more details */}
    </Card>
  );
};

export default ProductCard;
