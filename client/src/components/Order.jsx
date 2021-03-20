import React from 'react';

export default function Order({ order, confirmOrder, confirmed }) {
  if (!order.pizzas.length) return null;

  return (
    <div>
      <h2>Order</h2>
      <h4>Pizzas</h4>
      <ul>
        { order.pizzas.map(({ id, name, quantity }) => (
          <li key={id}>
            <span>{ name }</span>
            <span>{ quantity }</span>
          </li>
        )) }
      </ul>
      
      <p>Total: { order.total }</p>

      { !confirmed && <button onClick={confirmOrder}>Confirm Order</button> }
    </div>
  )
}
