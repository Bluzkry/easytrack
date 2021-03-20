import React from 'react';

const Ingredients = ({ ingredients }) => (
  <div>
    <h5>Ingredients</h5>
    <ul>
      { ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>) }
    </ul>
  </div>
);

export default Ingredients;
