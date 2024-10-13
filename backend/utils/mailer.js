
const nodemailer = require('nodemailer');

const sendEmail = async (emailData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASS   
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,        
    to: emailData.to,                    
    subject: emailData.subject,          
    html: emailData.html,                
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
