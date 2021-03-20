import React from 'react';

const Confirmation = ({ confirmation, reset }) => {
  if (!confirmation.success) return null;

  return (
    <div className='confirmation alert alert-warning'>
      <div>Confirmed! Your order will be delivered in {confirmation.deliveryTime} minutes.</div>
      <button onClick={reset} className='btn btn-success'>Order Again!</button>
    </div>
  );
};

export default Confirmation;
