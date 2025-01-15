import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: #282c34;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Garante que ocupa toda a largura */
  box-sizing: border-box; /* Certifica que padding não ultrapassa os limites */
`;


const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin-left: 1rem;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>E-commerce</Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
