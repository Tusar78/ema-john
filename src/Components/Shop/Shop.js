import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [products])
  return (
    <section className='shop'>
      <div className="products">
        <div className="product__container">
          {
            products.map(product => <Product key={product.id} product={product} />)
          }
        </div>
        <div className="blank"></div>
      </div>
      <div className="cart-info">

      </div>
    </section>
  );
};

export default Shop;