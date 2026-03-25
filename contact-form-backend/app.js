const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const contactRoutes = require('./Contact Routes/contactRoutes');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration - allow all origins for development
app.use(cors({
  origin: true, // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: (process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX || 100,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});
app.use('/api/contact', limiter);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Aspire Groups Contact API is running',
    timestamp: new Date().toISOString()
  });
});

// API info endpoint
app.get('/api', (req, res) => {
  res.status(200).json({
    name: 'Aspire Groups Contact API',
    version: '1.0.0',
    endpoints: {
      contact: 'POST /api/contact/submit',
      health: 'GET /health'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

module.exports = app;
