const getContactEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
      <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Aspire Groups</h1>
          <p style="margin: 10px 0 0; opacity: 0.9;">New Contact Form Submission</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 25px;">
            <p style="margin: 0; font-size: 16px;">
              <strong>New inquiry received from:</strong><br>
              ${data.fullName} (${data.email} | ${data.phone})
            </p>
          </div>

          <h3 style="color: #667eea; margin-bottom: 20px;">Submission Details</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa; width: 40%;"><strong>Full Name:</strong></td>
              <td style="padding: 12px;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa;"><strong>Email Address:</strong></td>
              <td style="padding: 12px;"><a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa;"><strong>Phone Number:</strong></td>
              <td style="padding: 12px;"><a href="tel:${data.phone}" style="color: #667eea;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa;"><strong>I Want To:</strong></td>
              <td style="padding: 12px;">${data.iWantTo}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa;"><strong>Type of Property:</strong></td>
              <td style="padding: 12px;">${data.propertyType}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa;"><strong>Budget Range:</strong></td>
              <td style="padding: 12px;">${data.budgetRange}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa;"><strong>Message:</strong></td>
              <td style="padding: 12px;">${data.message}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f8f9fa;"><strong>Submitted:</strong></td>
              <td style="padding: 12px;">${new Date(data.submittedAt).toLocaleString()}</td>
            </tr>
          </table>

          <!-- Action Buttons -->
          <div style="margin-top: 30px; text-align: center;">
            <a href="mailto:${data.email}" style="display: inline-block; background-color: #667eea; color: white; text-decoration: none; padding: 12px 25px; border-radius: 5px; margin: 5px;">Reply via Email</a>
            <a href="tel:${data.phone}" style="display: inline-block; background-color: #28a745; color: white; text-decoration: none; padding: 12px 25px; border-radius: 5px; margin: 5px;">Call Now</a>
          </div>
        </div>

        <!-- Footer with Owner Information -->
        <div style="background-color: #f8f9fa; padding: 20px; border-top: 1px solid #dee2e6;">
          <h4 style="color: #667eea; margin: 0 0 15px;">Team Members to Follow Up:</h4>
          <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 150px; margin: 5px;">
              <strong>Anil</strong><br>
              <small style="color: #666;">Senior Consultant</small><br>
              <a href="tel:+918427966111" style="color: #667eea; text-decoration: none;">+91 84279 66111</a>
            </div>
            <div style="flex: 1; min-width: 150px; margin: 5px;">
              <strong>Satya</strong><br>
              <small style="color: #666;">Client Relations</small><br>
              <a href="tel:+918748003000" style="color: #667eea; text-decoration: none;">+91 87480 03000</a>
            </div>
            <div style="flex: 1; min-width: 150px; margin: 5px;">
              <strong>Imran</strong><br>
              <small style="color: #666;">Property Specialist</small><br>
              <a href="tel:+919858863362" style="color: #667eea; text-decoration: none;">+91 98588 63362</a>
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 20px 0;">
          
          <p style="margin: 0; font-size: 14px; color: #666; text-align: center;">
            Mews Gate, Kurall Road, Kharar, Punjab 140301<br>
            <a href="mailto:info@aspiregroups.com" style="color: #667eea;">info@aspiregroups.com</a> | 
            <a href="mailto:sales@aspiregroups.com" style="color: #667eea;">sales@aspiregroups.com</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = {
  getContactEmailTemplate
};