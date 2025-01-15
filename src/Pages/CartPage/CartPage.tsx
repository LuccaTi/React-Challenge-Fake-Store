import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';

const CartContainer = styled.div`
  padding: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;
`;

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <CartContainer>Your cart is empty!</CartContainer>;
  }

  return (
    <CartContainer>
      {cart.map((product) => (
        <CartItem key={product.id}>
          <div>
            <h4>{product.title}</h4>
            <p>${product.price.toFixed(2)}</p>
          </div>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default CartPage;
