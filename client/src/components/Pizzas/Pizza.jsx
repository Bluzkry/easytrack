import React from 'react';
import Ingredients from './Ingredients';

const Pizza = ({ pizza, addPizza, confirmed }) => (
  <li key={pizza.id}>
    <h4>{ pizza.name }</h4>
    <p>Price: { pizza.price }</p>
    <Ingredients ingredients={pizza.ingredients} />

    { !confirmed && <button onClick={() => addPizza(pizza)}>Add</button> }
  </li>
);

export default Pizza;
