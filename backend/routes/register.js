const express = require("express");
const sendEmail = require("../utils/mailer");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, contact, organization, delegates } = req.body;

  const emailData = {
    to: email,
    subject: "GWECCC 2025 Registration Confirmation",
    html: `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GWECCC 2025 Emailer</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
      color: #333;
    }
    table {
      width: 100%;
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      border-collapse: collapse;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    td {
      padding: 20px;
      font-size: 16px;
      line-height: 1.6;
    }
    h1 {
      font-size: 26px;
      color: #0044cc;
      text-align: center;
      margin-bottom: 0;
    }
    p {
      font-size: 14px;
      color: #555555;
      text-align: center;
    }
    .button {
      background-color: #28a745;
      color: #ffffff;
      padding: 12px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      border-radius: 5px;
      font-size: 16px;
      margin: 20px auto;
    }
    .details {
      font-weight: bold;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    ul li {
      margin: 10px 0;
      text-align: center;
    }
    hr {
      border: none;
      border-top: 1px solid #ccc;
      margin: 30px 0;
    }
    @media only screen and (max-width: 600px) {
      table {
        width: 100%;
      }
      td {
        padding: 10px;
      }
      h1 {
        font-size: 22px;
      }
      p {
        font-size: 13px;
      }
      .button {
        font-size: 14px;
        padding: 10px;
        width: auto;
      }
    }
  </style>
</head>
<body>
  <table role="presentation">
    <tr>
      <td>
        <h1>GWECCC 2025</h1>
        <p>Date: March 15-17, 2025</p>
      </td>
    </tr>
    <tr>
      <td>
        <h1>Thank you for registering, {{name}}!</h1>
        <p>We are thrilled to confirm your registration for the <strong>GWECCC 2025</strong> event.</p>
        <p><strong>Event Details:</strong></p>
        <ul>
          <li>Date: <span class="details">25th January 2025</span></li>
          <li>Description: Join us for in-depth discussions on <em>Water, Energy, and Climate Security & Sustainability</em>.</li>
          <li>Delegate Type: <span class="details">{{delegates}}</span> attendee</li>
        </ul>
        <p>We look forward to seeing you there and appreciate your commitment to these crucial global topics!</p>
        <p>Join us at the Global Water, Energy, and Climate Conference (GWECCC) to explore key topics related to sustainability and climate security.</p>
        <a href="https://eventpromotor.netlify.app/#register" class="button">Register Now</a>
        <hr />
        <p><strong>Your Information:</strong></p>
        <p>
          Organization: <span class="details">{{organization}}</span><br />
          Contact No.: <span class="details">{{contact}}</span>
        </p>
        <p>Best regards,</p>
        <p>The GWECCC 2025 Team</p>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  };

  try {
    await sendEmail(emailData);
    res.status(200).json({ message: "Registration successful, email sent!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

module.exports = router;
