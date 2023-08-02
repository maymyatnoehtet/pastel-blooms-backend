const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

// Development Logging
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// Security
app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

// Handle all unhandled routes
app.all('*', (req, res, next) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

module.exports = app;
