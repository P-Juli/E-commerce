import React, { useContext } from 'react';
import './Product.css'; // Import your CSS file
import { ShopContext } from '../context/shop-context';

const Product = (props) => {
   const ctx= useContext(ShopContext)


let cartItemAmount= ctx.cartItems[props.data.id]

const clickHandler = () => {
  ctx.addToCart(props.data.id)
}


  return (
    <div className="product-container">
      <img src={props.data.productImage} alt={props.data.productName} className="product-image" />
      <div className="product-details">
        <p className="product-name">{props.data.productName}</p>
        <p className="product-price">{props.data.price}</p>
        <button onClick={clickHandler}>Add to Cart{cartItemAmount>0 ?`(${cartItemAmount})`:''}</button>
      </div>
    </div>
  );
}

export default Product;
