const fs = require('fs');
const path = require('path');

const rawOrders = require('../orders.json');
const rawProducts = require('../products.json');
const rawCustomers = require('../customers.json');

const products = {};
const customers = {};

let orders = [];

for (let i=0; i<rawProducts.length; i++) {
  products[rawProducts[i].name] = rawProducts[i].productId;
}

for (let i=0; i<rawCustomers.length; i++) {
  customers[rawCustomers[i].name] = rawCustomers[i].address;
}
//parseOrders
function parseOrders() {
  orders = [];
  for (let i=0; i<rawOrders.length; i++) {
    for (let j=0; j<rawOrders[i].items.length; j++) {
      const order = {};
      // order.name = rawOrders[i].items[j].item;
      order.buyer = rawOrders[i].buyer;
      order.productId = products[rawOrders[i].items[j].item];
      order.quantity = rawOrders[i].items[j].quantity;
      order.shippingAddress = customers[rawOrders[i].buyer];
      order.shippingTarget = new Date(rawOrders[i].shippingDate + ' ' +rawOrders[i].shippingTime).getTime();

      orders.push(order);
    }
  }
}

parseOrders();

const tastController = {};


tastController.showOrders = (req, res) => {
  res.jsonp(orders);
}


tastController.uploadOrder = (req, res) => {
  rawOrders.push(req.body)
  fs.writeFile(path.join(__dirname, '../newOrders.json'), JSON.stringify(rawOrders), (err) => {
    if (err) throw err;
  });
  res.send('got it');
}


tastController.searchOrder = (req, res) => {
  let order = {};
  if (req.query.productId) {
    order = orders.find((obj)=>{
      return obj.productId === Number(req.query.productId);
    })
  }
  if (req.query.buyer) {
    order = orders.find((obj)=>{
      return obj.buyer === req.query.buyer;
    })
  }
  if (req.query.shippingTarget) {
    order = orders.find((obj)=>{
      return obj.shippingTarget.toString() === req.query.shippingTarget;
    })
  }
  res.jsonp(JSON.stringify(order));
}

tastController.orders = orders;

module.exports = tastController;
