const { validationResult } = require('express-validator');
const emailService = require('../Email Service/emailService');

// In-memory storage (replace with database in production)
let submissions = [];

const contactController = {
  // Handle contact form submission
  async submitContactForm(req, res) {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const formData = {
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        iWantTo: req.body.iWantTo || 'Not specified',
        propertyType: req.body.propertyType || 'Not specified',
        budgetRange: req.body.budgetRange || 'Not specified',
        message: req.body.message || 'No message provided',
        submittedAt: new Date().toISOString()
      };

      // Store submission (replace with database)
      submissions.push(formData);

      // Send emails to all 3 owners
      const emailResult = await emailService.sendContactNotification(formData);

      if (emailResult.success) {
        res.status(200).json({
          success: true,
          message: 'Form submitted successfully. Our team will contact you soon.',
          data: {
            name: formData.fullName,
            email: formData.email
          }
        });
      } else {
        throw new Error('Failed to send email notifications');
      }

    } catch (error) {
      console.error('Contact form submission error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to process your request. Please try again later.'
      });
    }
  },

  // Get all submissions (admin only - add authentication)
  getSubmissions(req, res) {
    // Add authentication middleware in production
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions
    });
  }
};

module.exports = contactController;