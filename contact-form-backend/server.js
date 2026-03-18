/**
 * Aspire Groups Contact Form API Server
 * Main entry point for the contact form backend
 */

require('dotenv').config();

const app = require('./app');
const PORT = process.env.PORT || 5001;

// Start the server with graceful error handling
const server = app.listen(PORT, () => {
  console.log(`🚀 Aspire Groups Contact API running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`⚠️ Port ${PORT} is already in use.\n` +
      `  - stop the process already using the port (on Windows: netstat -ano | findstr :${PORT} and taskkill /PID <pid> /F)\n` +
      '  - or set `PORT` in .env to a different available port (e.g., 5001).');
    process.exit(1);
  }
  console.error('Server error:', err);
  process.exit(1);
});
