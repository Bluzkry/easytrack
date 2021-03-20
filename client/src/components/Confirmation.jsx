import React from 'react';

const Confirmation = ({ confirmation }) => {
  if (!confirmation.success) return null;
  
  return <div>Confirmed! Your order will be delivered in {confirmation.deliveryTime} minutes.</div>;
};

export default Confirmation;
