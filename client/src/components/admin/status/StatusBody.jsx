import React from 'react';

const StatusBody = ({ title, id, pizzas, changeOrder }) => (
  <tbody>
    <tr className='table-active'>
      <td>Pizza</td>
      <td>Quantity</td>
    </tr>

    { pizzas.map(({ name, quantity }, index) => (
      <tr key={index} className='table-warning'>
        <td>{name}</td>
        <td>{quantity}</td>
      </tr>
    )) }

    <tr className='table-info'>
      <td>Status</td>
      <td>
        <select onChange={e => changeOrder(e, id)} value={title}>
          <option value='pending'>Pending</option>
          <option value='processing'>Processing</option>
          <option value='delivered'>Delivered</option>
        </select>
      </td>
    </tr>
  </tbody>
);

export default StatusBody;
