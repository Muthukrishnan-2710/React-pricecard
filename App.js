// src/App.js
import React from 'react';
import PricingCard from './PricingCard';

const App = () => {
  const pricingOptions = [
    {
      title: 'FREE',
      price: '0 / Month',
      features: ['single user','50GB Storage','Unlimited public projects','communuity Access'],
      buttonText: 'Choose the plan',
    },
    {
      title: 'PLUS',
      price: '9 / Month',
      features: ['5 Users','50GB Storage','Unlimited public projects','communuity Access'],
      buttonText: 'Choose the plan',
    },
    {
      title: 'PRO',
      price: '49 / Month',
      features: ['Unlimited Users','50GB Storage','Unlimited public projects','communuity Access'],
      buttonText: 'Choose the plan',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {pricingOptions.map((option, index) => (
        <PricingCard
          key={index}
          title={option.title}
          price={option.price}
          features={option.features}
          buttonText={option.buttonText}
        />
      ))}
    </div>
  );
};

export default App;


