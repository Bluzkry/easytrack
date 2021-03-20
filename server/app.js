const express = require('express');
const app = express();
const logger = require('morgan');

const pizzasRouter = require('./routes/pizzas');
const orderRouter = require('./routes/order');
const ordersRouter = require('./routes/orders');

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => res.send('You are on the Easytrack server.'));
app.use('/pizzas', pizzasRouter);
app.use('/order', orderRouter);
app.use('/orders', ordersRouter);

app.listen(8080, () => console.log('Easytrack server listening on port 8080.'));
