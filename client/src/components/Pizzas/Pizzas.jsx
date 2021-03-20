import React from 'react';
import Pizza from './Pizza';

const Pizzas = ({ pizzas, addPizza, confirmed }) => (
  <div>
    <h2>Pizzas</h2>

    <ul>
      { pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} addPizza={addPizza} confirmed={confirmed} />) }
    </ul>
  </div>
);

export default Pizzas;
