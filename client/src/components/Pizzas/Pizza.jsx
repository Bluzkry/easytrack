import React from 'react';
import Ingredients from './Ingredients';
import Pricing from '../common/Pricing';

const Pizza = ({ pizza, addPizza, confirmed }) => (
  <li className='pizza list-group-item bg-light border border-light rounded'>
    <Pricing title={pizza.name} amount={pizza.price} />

    <div className='pizza-content'>
    <Ingredients ingredients={pizza.ingredients} />

    { !confirmed && (
      <button className='pizza-button btn btn-secondary' onClick={() => addPizza(pizza)}>Add It!</button>
    ) }
    </div>
  </li>
);

export default Pizza;
