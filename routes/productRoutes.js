const express = require('express');
const multer = require('multer');
const productController = require('../controllers/productControllers');

const upload = multer();

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts)
  .post(upload.single('image'), productController.createProduct);

router
  .route('/:id')
  .get(productController.getOneProduct)
  .delete(productController.deleteProduct);

module.exports = router;
