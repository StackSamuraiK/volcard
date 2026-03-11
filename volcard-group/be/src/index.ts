import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'smtp.mail.yahoo.com', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // NOTE: Use App Password if using Gmail with 2FA
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer verification error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Contact Route
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address (Must be authenticated user)
    to: 'sanskar@kimbocorp.com', // Receiver address (Target mail)
    replyTo: email, // Reply-to the user who submitted the form
    subject: `New Contact Request from ${name}`,
    text: `
      You have received a new contact submission from Volcard website.
      
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
