const express = require('express');
const sendEmail = require('../utils/mailer');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, contact, organization, delegates } = req.body;

  const emailData = {
    to: email,
    subject: 'GWECCC 2025 Registration Confirmation',
    html: `
      <h1>Thank you for registering, ${name}!</h1>
      <p>Event: <strong>GWECCC 2025</strong></p>
      <p>Date: <strong>25th January 2025</strong></p>
      <p>Description: Join us for discussions on Water, Energy, and Climate Security & Sustainability.</p>
      <p>You have registered as a <strong>${delegates}</strong> attendee.</p>
      <p>We are excited to have you with us!</p>
      <p>Organization: ${organization}</p>
      <p>Contact No.: ${contact}</p>
    `,
  };

  try {
    await sendEmail(emailData);
    res.status(200).json({ message: 'Registration successful, email sent!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
});

module.exports = router;
