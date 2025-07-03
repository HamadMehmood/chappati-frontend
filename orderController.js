const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { name, email, address, quantity, amount } = req.body;

    if (!name || !email || !address || !quantity || !amount) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const order = new Order({ name, email, address, quantity, amount });
    await order.save();

    res.status(201).json({ message: 'Order saved successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
