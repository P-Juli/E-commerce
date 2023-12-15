// Products.js
import React, { useContext } from "react";
import "./Products.css";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../productlists";
import { Link } from "react-router-dom";

const Products = () => {
  // cart
  const ctx = useContext(ShopContext);

  const filteredValue = Object.entries(ctx.cartItems)
    .filter(([productId, quantity]) => quantity > 0)
    .map(([productId, quantity]) => {
      const product = PRODUCTS.find(
        (product) => product.id === parseInt(productId)
      );
      return { ...product, quantity };
    });

  console.log("filtered value is ", filteredValue);

  const addHandler = (id) => {
    ctx.addToCart(id);
  };
  const removeHandler = async (id, qty) => {
    if (qty > 1) {
      await ctx.removeFromCart(id);
      
    }
  };

  return (
    <div className="products-container">
      <h2 className="cart-title">Your Cart</h2>
      <ul>
        {filteredValue.map((val) => (
          <li key={val.id}>
            <img src={val.productImage} alt={val.productName} />
            <div className="product-details">
              <p className="product-name">{val.productName}</p>
              <p className="product-price">{val.price}</p>
            </div>
            <span className="quantity">Quantity: {val.quantity}</span>
            <button onClick={() => addHandler(val.id)}>+</button>
            <button onClick={() => removeHandler(val.id, val.quantity)}>
              -
            </button>
          </li>
        ))}
      </ul>

      <button><Link to='/'>continue shopping</Link></button>
    </div>
  );
};

export default Products;

/*
import React, { useContext } from 'react';
import './Products.css'; // Import your CSS file
import { ShopContext } from '../context/shop-context';

const Products = () => {
    const ctx= useContext(ShopContext)
    
  return (
    <div className="products-container">
      <h2 className="cart-title">Your Cart</h2>
      
      </div>
      );
    }
    
    export default Products;
    
*/
