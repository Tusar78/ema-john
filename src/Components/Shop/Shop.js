import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleAddToCart = selectedProduct => {
    let newCart = [];
    const exits = cart.find(product => product.id === selectedProduct.id);
    if (!exits) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exits.quantity += 1;
      newCart = [...rest, exits]
    }
    setCart(newCart)
  }

  console.log(cart);
  return (
    <section className='shop'>
      <div className="products">
        <div className="product__container">
          {
            products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)
          }
        </div>
        <div className="blank"></div>
      </div>
      <div className="cart-info">
        <Cart />
      </div>
    </section>
  );
};

export default Shop;