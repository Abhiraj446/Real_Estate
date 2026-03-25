const express = require('express');
const { body } = require('express-validator');
const contactController = require('../Contact Controller/contactController');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('fullName').notEmpty().withMessage('Full name is required').trim().escape(),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('phone').notEmpty().withMessage('Phone number is required').trim(),
  body('iWantTo').optional().trim(),
  body('propertyType').optional().trim(),
  body('budgetRange').optional().trim(),
  body('message').optional().trim().escape()
];

// Contact form submission endpoint
router.post('/submit', contactValidation, contactController.submitContactForm);

// Optional: Get all contact submissions (for admin)
router.get('/submissions', contactController.getSubmissions);

module.exports = router;