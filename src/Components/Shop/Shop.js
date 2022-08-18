import React from "react";
import { AiOutlineArrowRight, AiOutlineDelete } from "react-icons/ai";
import { addToDB } from "../../FakeDB/FakeDB";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exits = cart.find((product) => product.id === selectedProduct.id);
    if (!exits) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exits.quantity += 1;
      newCart = [...rest, exits];
    }
    setCart(newCart);
    addToDB(selectedProduct.id);
  };

  return (
    <section className="shop">
      <div className="products">
        <div className="product__container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="blank"></div>
      </div>
      <div className="cart-info">
        <Cart cart={cart}>
          <div className="cart__buttons">
            <button type="button" className="cart__btn cart__btn--danger">
              <span>Clear Cart</span>
              <AiOutlineDelete className="cart__btn-icon" />
            </button>
            <button type="button" className="cart__btn cart__btn--yellow">
              <span>Review Order</span>
              <AiOutlineArrowRight className="cart__btn-icon" />
            </button>
          </div>
        </Cart>
      </div>
    </section>
  );
};

export default Shop;
