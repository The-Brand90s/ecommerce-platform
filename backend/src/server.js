const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Auth Routes
app.post('/api/auth/register', require('./routes/auth').register);
app.post('/api/auth/login', require('./routes/auth').login);
app.post('/api/auth/refresh', require('./routes/auth').refreshToken);

// Product Routes
app.get('/api/products', require('./routes/products').getProducts);
app.get('/api/products/:id', require('./routes/products').getProduct);
app.post('/api/products', require('./middleware/auth'), require('./routes/products').createProduct);
app.put('/api/products/:id', require('./middleware/auth'), require('./routes/products').updateProduct);
app.delete('/api/products/:id', require('./middleware/auth'), require('./routes/products').deleteProduct);

// Cart Routes
app.get('/api/cart', require('./middleware/auth'), require('./routes/cart').getCart);
app.post('/api/cart', require('./middleware/auth'), require('./routes/cart').addToCart);
app.put('/api/cart/:itemId', require('./middleware/auth'), require('./routes/cart').updateCartItem);
app.delete('/api/cart/:itemId', require('./middleware/auth'), require('./routes/cart').removeFromCart);

// Order Routes
app.get('/api/orders', require('./middleware/auth'), require('./routes/orders').getOrders);
app.post('/api/orders', require('./middleware/auth'), require('./routes/orders').createOrder);
app.get('/api/orders/:id', require('./middleware/auth'), require('./routes/orders').getOrder);
app.put('/api/orders/:id', require('./middleware/auth'), require('./routes/orders').updateOrder);

// Payment Routes
app.post('/api/payments/stripe', require('./middleware/auth'), require('./routes/payments').stripeCheckout);
app.post('/api/payments/stripe/webhook', require('./routes/payments').stripeWebhook);

// Review Routes
app.get('/api/products/:id/reviews', require('./routes/reviews').getReviews);
app.post('/api/products/:id/reviews', require('./middleware/auth'), require('./routes/reviews').createReview);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
