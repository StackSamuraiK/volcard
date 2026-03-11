import express, { Request, Response } from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact Route
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Use Resend's default testing domain until you verify your own
      to: ['sanskar@kimbocorp.com'], 
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      text: `
        You have received a new contact submission from the Volcard website.
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
