import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ebymathew142@gmail.com',
        pass: process.env.EMAIL_APP_PASSWORD || 'erxfgbdlkfewsveg', // App Password
      },
    });

    // Email content
    const mailOptions = {
      from: 'ebymathew142@gmail.com',
      to: 'ebymathew142@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
