const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

const apiUrl = '/api';

const pizzasRouter = require('./routes/pizzas');
const orderRouter = require('./routes/order');
const ordersRouter = require('./routes/orders');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));


app.get(apiUrl, (req, res) => res.send('You are on the Easytrack server.'));
app.use(apiUrl + '/pizzas', pizzasRouter);
app.use(apiUrl + '/order', orderRouter);
app.use(apiUrl + '/orders', ordersRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Easytrack server listening on port 8080.'));
