import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Debug: Log environment variables
console.log('ZOHO_EMAIL:', process.env.ZOHO_EMAIL);
console.log('ZOHO_PASSWORD:', process.env.ZOHO_PASSWORD ? 'set' : 'not set');
console.log('CONTACT_FORM_RECIPIENT:', process.env.CONTACT_FORM_RECIPIENT);

// Validate environment variables
const requiredEnvVars = ['ZOHO_EMAIL', 'ZOHO_PASSWORD', 'CONTACT_FORM_RECIPIENT'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
}

// Create a transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function POST(request: Request) {
  // Check if environment variables are set
  if (missingEnvVars.length > 0) {
    console.error('Email configuration is incomplete. Please set up environment variables in Vercel.');
    return NextResponse.json(
      { message: 'Contact form is not properly configured. Please try again later.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: process.env.CONTACT_FORM_RECIPIENT,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 