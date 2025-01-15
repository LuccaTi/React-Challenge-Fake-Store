import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: #fff;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Button onClick={() => addToCart(product)} disabled={isInCart}>
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </Button>
      {isInCart && (
        <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
      )}
    </Card>
  );
};

export default ProductCard;
