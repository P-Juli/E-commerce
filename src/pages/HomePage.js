import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'
// import MainNavigation from '../Components/MainNavigation'
import { PRODUCTS } from "../productlists";
import Product from "../components/Product";
import './HomePage.css'


const HomePage = () => {//shop


  return (
    <div className="home-page">
      <p className="welcome-message"> welcome to my shop</p>
      <ul className="product-list">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-container">
            <Product data={product} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
