// models/ContactSubmission.js
const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    iWantTo: String,
    propertyType: String,
    budgetRange: String,
    message: String,
    status: { type: String, default: 'pending' },
    assignedTo: { type: String, enum: ['anil', 'satya', 'imran', 'unassigned'], default: 'unassigned' },
    notes: String,
    submittedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);