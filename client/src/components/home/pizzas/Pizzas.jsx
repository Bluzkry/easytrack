import React from 'react';
import Pizza from './Pizza';

const Pizzas = ({ pizzas, addPizza, confirmed }) => (
  <div className='pizzas'>
    <div className='title-container'>
      <h2 className='title bg-light text-primary'>Pizzas</h2>
    </div>

    <ul className='list-group'>
      { pizzas.length > 0 && pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} addPizza={addPizza} confirmed={confirmed} />) }
    </ul>
  </div>
);

export default Pizzas;
