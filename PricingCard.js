// src/PricingCard.js
import React from 'react';
import './PricingCard.css'; // You can style your card here

const PricingCard = ({ title, price, features, buttonText }) => {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p className="price">${price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>{buttonText}</button>
    </div>
  );
};

export default PricingCard;

