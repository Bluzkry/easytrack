import React from 'react';
import Pricing from '../../common/Pricing';

const OrderContent = ({ order }) => (
  <div className='order-content'>

    <ul className='card-text card'>
      <table className='table table-striped'>
        <thead className='text-danger'>
        <tr>
          <th>Pizza Name</th>
          <th>Amount</th>
        </tr>
        </thead>
        
        <tbody>
        { order.pizzas.map(({ id, name, quantity }) => (
          <tr key={id}>
            <th>{ name }</th>
            <th>{ quantity }</th>
          </tr>
        )) }
        </tbody>
      </table>
    </ul>

    <Pricing title='Total' amount={order.total} />
  </div>
);

export default OrderContent;
