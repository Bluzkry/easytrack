import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Pizzas from './components/Pizzas/Pizzas';
import Order from './components/Order';
import Confirmation from './components/Confirmation';

const mockPizzasList = require('./mockDb/pizzas');
const mockOrderResponse = require('./mockDb/order');

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [order, setOrder] = useState({
    pizzas: [],
    total: 0,
  });
  const [confirmation, setConfirmation] = useState({ success: false, deliveryTime: 0 });

  useEffect(() => {
    async function fetchPizzas() {
      try {
        const pizzasList = await axios('/pizzas');
        setPizzas(mockPizzasList);
      } catch (error) {
        console.error('error');
        setPizzas(mockPizzasList);
      }
    }

    fetchPizzas();
  }, []);

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
    async function postOrder() {
      try {
        const { data: orderResponse } = await axios.post('/orders', order);
        setPizzas(mockPizzasList);

        const deliveryTime  = Math.floor(orderResponse.deliveryTime/60000);

        setConfirmation({
          ...orderResponse,
          deliveryTime,
        });
      } catch (error) {
        console.error('error');
        setConfirmation(mockOrderResponse);
      }
    }

    postOrder();
  };

  return (
    <div className='app'>
      <Confirmation confirmation={confirmation} />
      
      <div className='main'>
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
    </div>
  );
}

export default App;
