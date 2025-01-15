import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import CartPage from './Pages/CartPage/CartPage';
import { CartProvider } from './contexts/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
