import React from 'react';
import OrderContent from './OrderContent';

const Order = ({ order, confirmOrder, confirmed, reset }) => {
  if (!order.pizzas.length) return (
    <div className='title-container'>
      <h2 className='order-title title order-title-other bg-light text-primary'>Order some pizza!</h2>
    </div>
  );

  return (
    <div className='order card bg-light'>
      <div className='card-body'>
        <h2 className='order-title card-title text-primary'>This is your current order!</h2>

        <OrderContent order={order} />

      { !confirmed && (
        <div className='order-button-container'>
          <button className='btn btn-danger' onClick={reset}>Reset Order</button>
          <button className='btn btn-success' onClick={confirmOrder}>Confirm Order</button>
        </div>
      )}
      </div>
    </div>
  )
};

export default Order;
