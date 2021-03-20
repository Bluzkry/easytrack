import React from 'react';

const Pricing = ({ title, amount }) => (
  <div className="pricing">
    <h4 className='text-secondary'>{ title }</h4>
    <h6 className="text-success">${ amount }</h6>
  </div>
);

export default Pricing;
