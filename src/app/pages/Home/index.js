import React from 'react';
import './index.scss';
import { ProductCard } from '../../components';

function Home({ products }) {
  return (
    <div className="Home">
      {!products.length && <p>Sorry, no products</p>}
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Home;
