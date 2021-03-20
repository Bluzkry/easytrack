const mockPizzas = require('./pizzas');
const mockOrders = require('./orders');

const isCollision = (newId, orders) => orders.some(({ id }) => id === newId);

const addOrder = order => {
  const { mockOrders } = db.mockDb;
  const newOrder = {
    ...order,
    id: Math.random(),
    status: 'pending',
  };

  isCollision(newOrder.id, mockOrders)
    ? addOrder(order)
    : mockOrders.push(newOrder);
};

const editOrders = orders => {
  db.mockDb.mockOrders = orders.flat();
};

const db = {
  mockDb: {
    mockPizzas,
    mockOrders,
  },
  addOrder,
  editOrders,
};

module.exports = db;
