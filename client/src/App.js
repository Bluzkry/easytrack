import React, { useState, useEffect } from 'react';
import './App.css';
import Pizzas from "./components/Pizzas/Pizzas";
import Order from "./components/Order";
import Confirmation from "./components/Confirmation";

const pizzasList = [
    {
      "id": 1,
      "name": "Margherita",
      "price": 5,
      "ingredients": [
        "tomato",
        "mozzarella"
      ]
    },
    {
      "id": 2,
      "name": "Bufala",
      "price": 6,
      "ingredients": [
        "tomato",
        "mozarella di bufala"
      ]
    },
    {
      "id": 3,
      "name": "Romana",
      "price": 5,
      "ingredients": [
        "tomato",
        "mozzarella",
        "anchovies",
        "oregano",
        "oil"
      ]
    },
    {
      "id": 4,
      "name": "Diavola",
      "price": 7.5,
      "ingredients": [
        "tomato",
        "mozzarella",
        "spicy salami"
      ]
    },
    {
      "id": 5,
      "name": "Pizza Bianca",
      "price": 5,
      "ingredients": [
        "mozzarella",
        "oregano"
      ]
    }
  ];
const orderResponse = {
  "success": true,
  "deliveryTime": 2100000
};

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [order, setOrder] = useState({
    pizzas: [],
    total: 0,
  });
  const [confirmation, setConfirmation] = useState({ success: false, deliveryTime: 0 });

  useEffect(() => {
    setPizzas(pizzasList);
  });

  const addPizza = ({ id: orderId, name, price }) => {
    const inOrder = order.pizzas.some(({ id }) => id === orderId);

    let newPizzas = [ ...order.pizzas ];
    if (inOrder) {
      newPizzas = newPizzas.map(oldPizza => {
        if (oldPizza.id === orderId) {
          const newPizza = { ...oldPizza };
          newPizza.quantity++;
          return newPizza;
        }

        return oldPizza;
      })
    } else {
      newPizzas.push({ id: orderId, name, quantity: 1 });
    }

    setOrder((prevOrder) => ({
      total: prevOrder.total + price,
      pizzas: newPizzas
    }));
  };

  const confirmOrder = () => {
    const deliveryTime  = Math.floor(orderResponse.deliveryTime/60000);

    setConfirmation({
      ...orderResponse,
      deliveryTime,
    });
  };
  
  return (
    <div className="App">
      <div className="App-header">
        <Pizzas
          pizzas={pizzas}
          addPizza={addPizza}
          confirmed={confirmation.success}
        />

        <Order
          order={order}
          confirmOrder={confirmOrder}
          confirmed={confirmation.success}
        />
      </div>

      <div className="App-header">
        <Confirmation confirmation={confirmation} />
      </div>
    </div>
  );
}

export default App;
