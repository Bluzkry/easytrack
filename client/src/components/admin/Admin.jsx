import React, { useState, useEffect } from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import './Admin.scss';
import Status from './status/Status';

const mockOrders = require('../../mockDb/orders');

const Admin = () => {
  const [originalOrders, setOriginalOrders] = useState([]);
  const [orders, setOrders] = useState([]);
  const [pending, setPending] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [delivered, setDelivered] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const { data } = await axios('./orders');
        setOriginalOrders(data);
        organizeOrders(data)
      } catch (error) {
        console.error(error);
        setOriginalOrders(mockOrders);
        organizeOrders(mockOrders)
      }
    }
    
    fetchOrders()
  }, []);

  const organizeOrders = n => {
    const _n = _.cloneDeep(n);
    const _pending = _.cloneDeep(n.filter(({ status }) => status === 'pending'));
    const _processing = _.cloneDeep(n.filter(({ status }) => status === 'processing'));
    const _delivered = _.cloneDeep(n.filter(({ status }) => status === 'delivered'));

    setPending(_pending);
    setProcessing(_processing);
    setDelivered(_delivered);
    setOrders(_n);
  };

  const changeOrder = ({ target }, id) => {
    let newOrders = _.cloneDeep(orders);
    newOrders = newOrders.map(o => {
      if (o.id === id) {
        return {
          ...o,
          status: target.value,
        };
      }
      return o;
    });

    organizeOrders(newOrders);
  };
  
  const save = async () => {
    const newOrders = [_.cloneDeep(pending), _.cloneDeep(processing), _.cloneDeep(delivered)];
    try {
      const { data } = await axios.post('/orders', newOrders);
      setOriginalOrders(data);
    } catch (error) {
      console.error('error');
    }
  };

  const reset = () => {
    organizeOrders(originalOrders);
  };

  return (
    <div className='admin'>
      <div className='header'>
        <div className='link'>
          <Link to='/'>Click here to go to the page for users.</Link>
        </div>
        <div className='header-buttons'>
          <button className='btn btn-warning' onClick={reset}>Reset</button>
          <button className='save-button btn btn-success' onClick={save}>Save</button>
        </div>
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
