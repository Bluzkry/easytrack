import React from 'react';
import StatusBody from './StatusBody';

const Status = ({ title, orders, changeOrder }) => (
  <div className='status'>
    <h3>{ title }</h3>

    <div className='status-content'>
      { orders.length > 0 && orders.map(({ id, pizzas }) => (
        <table key={id} className='table'>
          <thead>
            <tr>
              <td className='text-success'>Order #{ id }</td>
            </tr>
          </thead>

          <StatusBody title={title} id={id} pizzas={pizzas} changeOrder={changeOrder} />
        </table>
      )) }
    </div>
  </div>
);

export default Status;
