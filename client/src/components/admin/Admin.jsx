import React, { useState, useEffect } from 'react';
import {
  Link
} from 'react-router-dom';
import axios from "axios";
import './Admin.scss';
import Status from "./status/Status";

const mockOrders = require('../../mockDb/orders');

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [pending, setPending] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [delivered, setDelivered] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const { data } = await axios('./orders');
        setOrders(data);
        organizeOrders(data)
      } catch (error) {
        console.error(error);
        setOrders(mockOrders);
        organizeOrders()
      }
    }
    
    fetchOrders()
  }, []);

  const organizeOrders = n => {
    const _pending = n.filter(({ status }) => status === 'pending');
    const _processing = n.filter(({ status }) => status === 'processing');
    const _delivered = n.filter(({ status }) => status === 'delivered');

    setPending(_pending);
    setProcessing(_processing);
    setDelivered(_delivered);
  };

  const changeOrder = ({ target }, id) => {
    let newOrders = [ ...orders ];
    newOrders = newOrders.map(order => {
      if (order.id === id) {
        order.status = target.value;
        return order;
      }
      return order;
    });

    organizeOrders(newOrders);
  };

  return (
    <div className='admin'>
      <div className='header'>
        <div className='link'>
          <Link to="/">Click here to go to the page for users.</Link>
        </div>
        <button className='btn btn-success'>Save</button>
      </div>

      <div className='main'>
        <Status title='pending' orders={pending} changeOrder={changeOrder} />
        <Status title='processing' orders={processing} changeOrder={changeOrder} />
        <Status title='delivered' orders={delivered} changeOrder={changeOrder} />
      </div>
    </div>
  )
};

export default Admin;
