const orderModel = require('../models/Order')

exports.getOrders = (req, res, next) => {
  // Schreib hier code um alle Bestellungen aus der orders-Collection zu holen

  const allOrders = orderModel.find()

  allOrders
  .then(data => res.status(200).send(data))

};

exports.getOrder = (req, res, next) => {
  const { id } = req.params;
  const order = orderModel.find({ _id :  id });
  order
  .then(data => res.send(data))
};

exports.deleteOrder = (req, res, next) => {
  const { id } = req.params;
  const order = orderModel.remove({ _id : id })
  order
  .then(data => res.send(data))
};

exports.updateOrder = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  const order = orderModel.findByIdAndUpdate(id,dt,{new : true})
  order
  .then(data => res.send(data))
};

exports.addOrder = (req, res, next) => {
  const { quantity, record} = req.body

  const postOrder = new orderModel({
    quantity,
     record
  })

  postOrder
  .save()
  .then(data => res.status(200).send(data))


};
