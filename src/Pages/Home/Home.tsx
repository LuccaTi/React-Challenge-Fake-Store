import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../Services/Api';
import ProductCard from '../../components/ProductCard/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%; /* Garante que ocupa a largura correta */
  box-sizing: border-box; /* Evita problemas de overflow */
`;


const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);


  return (
    <ProductsGrid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsGrid>
  );
};

export default Home;