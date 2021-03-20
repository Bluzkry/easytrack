import React from 'react';

const Ingredients = ({ ingredients }) => (
  <div className='ingredients card'>
    <div className='card-body'>
      <h5 className='card-title text-danger'>Ingredients</h5>
      <ul>
        { ingredients.map((ingredient, index) => <li key={index} className='card-text'>{ingredient}</li>) }
      </ul>
    </div>
  </div>
);

export default Ingredients;
