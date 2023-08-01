const Product = require('../models/productModel');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
      error: err,
    });
  }
};

exports.getOneProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'There is no product with this id',
      });
    }

    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
      error: err,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    const { originalname, mimetype, buffer } = req.file;

    const product = await Product.create({
      name,
      price,
      description,
      image: {
        filename: originalname,
        contentType: mimetype,
        data: buffer,
      },
    });

    res.status(201).json({
      status: 'success',
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
      error: err,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).message({
        status: 'fail',
        message: 'There is no product with this id',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
      error: err,
    });
  }
};
