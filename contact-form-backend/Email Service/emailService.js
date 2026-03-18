const nodemailer = require('nodemailer');
const { getContactEmailTemplate } = require('../Email Template/emailTemplate');

class EmailService {
  constructor() {
    // Create transporter with proper Gmail SMTP settings
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false, // false for port 587 (TLS), true for port 465 (SSL)
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection on startup
    this.transporter.verify((error, success) => {
      if (error) {
        console.error('❌ Email service connection failed:', error.message);
      } else {
        console.log('✅ Email service connected and ready');
      }
    });

    // Owner emails from environment
    this.ownerEmails = [
      process.env.OWNER1_EMAIL,
      process.env.OWNER2_EMAIL,
      process.env.OWNER3_EMAIL
    ].filter(email => email && email.includes('@')); // Remove any undefined/invalid emails

    console.log('📧 Owner emails configured:', this.ownerEmails);
  }

  async sendContactNotification(formData) {
    try {
      if (this.ownerEmails.length === 0) {
        throw new Error('No owner emails configured');
      }

      const mailOptions = {
        from: `"Aspire Groups" <${process.env.EMAIL_USER}>`,
        to: this.ownerEmails.join(', '), // Send to all owners
        subject: `🏠 New Contact Form Submission - ${formData.fullName}`,
        html: getContactEmailTemplate(formData),
        replyTo: formData.email,
        text: `New contact from ${formData.fullName}. Email: ${formData.email}, Phone: ${formData.phone}`
      };

      console.log('📤 Sending email to owners:', this.ownerEmails);
      
      // Send email to owners
      const info = await this.transporter.sendMail(mailOptions);
      console.log('✅ Email sent to owners:', info.messageId);

      // Also send confirmation to user
      await this.sendUserConfirmation(formData);

      return {
        success: true,
        messageId: info.messageId,
        recipients: this.ownerEmails
      };

    } catch (error) {
      console.error('❌ Email sending failed:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async sendUserConfirmation(formData) {
    try {
      const mailOptions = {
        from: `"Aspire Groups" <${process.env.EMAIL_USER}>`,
        to: formData.email,
        subject: 'Thank You for Contacting Aspire Groups',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; text-align: center;">Aspire Groups</h1>
              <p style="color: #e0e0e0; text-align: center; margin-top: 10px;">Real Estate Solutions</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px;">
              <h2 style="color: #333;">Thank You for Reaching Out, ${formData.fullName}! 👋</h2>
              <p style="color: #666; line-height: 1.6;">We have received your inquiry and one of our team members will contact you shortly.</p>
              
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #444; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Your Submission Details:</h3>
                <p><strong>📛 Name:</strong> ${formData.fullName}</p>
                <p><strong>📧 Email:</strong> ${formData.email}</p>
                <p><strong>📱 Phone:</strong> ${formData.phone}</p>
                <p><strong>🎯 I Want To:</strong> ${formData.iWantTo}</p>
                <p><strong>🏠 Property Type:</strong> ${formData.propertyType}</p>
                <p><strong>💰 Budget Range:</strong> ${formData.budgetRange}</p>
                <p><strong>💬 Message:</strong> ${formData.message}</p>
              </div>
              
              <p style="color: #666; line-height: 1.6;">Our team consists of experienced professionals who will assist you with your real estate needs:</p>
              <ul style="color: #666;">
                <li><strong>Anil</strong> - Senior Property Consultant</li>
                <li><strong>Satya</strong> - Client Relations Manager</li>
                <li><strong>Imran</strong> - Property Specialist</li>
              </ul>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #667eea;">
                <p style="margin: 0; color: #333;">
                  <strong>Best regards,<br>
                  Aspire Groups Team</strong><br>
                  📍 Mews Gate, Kurall Road, Kharar, Punjab 140301<br>
                  📞 Phone: +91 8427966111
                </p>
              </div>
            </div>
            
            <div style="text-align: center; padding: 15px; color: #999; font-size: 12px;">
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        `,
        text: `Thank You for Contacting Aspire Groups!\n\nWe have received your inquiry and will contact you shortly.\n\nYour Details:\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nBest regards,\nAspire Groups Team\nMews Gate, Kurall Road, Kharar, Punjab 140301\nPhone: +91 8427966111`
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('✅ Confirmation email sent to user:', info.messageId);
      
    } catch (error) {
      console.error('❌ User confirmation email failed:', error.message);
      // Don't throw error - user confirmation is optional
    }
  }
}

module.exports = new EmailService();
