import React from 'react';

const Confirmation = ({ confirmation }) => {
  if (!confirmation.success) return null;

  return (
    <div className='alert alert-warning'>
      <div>Confirmed! Your order will be delivered in {confirmation.deliveryTime} minutes.</div>
    </div>
  );
};

export default Confirmation;
